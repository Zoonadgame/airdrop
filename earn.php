<?php require "config/earnConfig.php" ?>
<!doctype html>
<html lang="en">

<head>
    <?php include "partial/head.php" ?>
    <title>Zoonad | Earn</title>
    <style>
        .button-inv{
            z-index: 999;
            position: fixed;
            bottom: 65px;
            left: 0;
            right: 0;
            padding-left: 10px;
            padding-right: 10px; 
        }

        .bg-transparent{
            background-color: rgba(255, 255, 255, 0.1) !important;
            padding: 1px;
            border-radius: 20px 20px 20px 20px;
            -webkit-border-radius: 20px 20px 20px 20px;
            -moz-border-radius: 20px 20px 20px 20px;
        }
        .earn-img{
            max-width: 120px;
        }

        .fee img{
            min-width: 10px;
            max-width: 15px;
        }

        .modal .modal-dialog .modal-content{
            border-radius: 35px;
            border-radius: 35px 35px 0px 0px;
            -webkit-border-radius: 35px 35px 0px 0px;
            -moz-border-radius: 35px 35px 0px 0px;
            box-shadow: 2px -15px 18px -3px rgba(222,64,189,0.39);
            -webkit-box-shadow: 2px -15px 18px -3px rgba(222,64,189,0.39);
            -moz-box-shadow: 2px -15px 18px -3px rgba(222,64,189,0.39);
            border-top: 2px solid #ff2ca9;
        }
        .modal .modal-dialog .modal-content .modal-header{
            /* padding: 2px; */
            border: 0;
        }

        .modal .modal-dialog .modal-content .modal-body button{
            
            background-color: rgba(255, 255, 255, 0.1);
        }
        .modal .modal-dialog .modal-content .modal-body img{
            min-width: 10px;
            max-width: 95px;
            border-radius: 100px 100px 100px 100px;
            -webkit-border-radius: 100px 100px 100px 100px;
            -moz-border-radius: 100px 100px 100px 100px;
        }
        .modal .modal-dialog .modal-content .modal-header button{
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 200px 200px 200px 200px;
            -webkit-border-radius: 200px 200px 200px 200px;
            -moz-border-radius: 200px 200px 200px 200px;
        }
        
        .modal .modal-dialog .modal-content .fee img{
            min-width: 10px;
            max-width: 15px;
        }

    </style>
    <link rel="stylesheet" href="assets/css/custome.css">
    <script src="min.js"></script>
</head>

<body>

    <!-- loader -->
    <div id="loader">
        <img src="assets/img/loading-icon.png" alt="icon" class="loading-icon">
    </div>
    <!-- * loader -->

    <!-- App Capsule -->
    <div id="appCapsule">

        <div class="section full mb-3 text-center">
            <img src="assets/img/coin.png" class="earn-img" alt="">
            <h1 class="text-white">Get more reward</h1>
        </div>

        <!-- yt -->
        <?php  
        $ytTask = getDailyTask("YT");
        if(count($ytTask) >0){
        ?>
 
        <div class="section mt-4">
            <div class="section-heading">
                <h4 class="title text-white">Zoonad YouTube</h4>
                <!-- <a href="app-transactions.html" class="link">View All</a> -->
            </div>
            <div class="transactions">
                <?php foreach($ytTask as $task){ ?>
                <!-- item -->
                <a href="" data-bs-toggle="modal" data-bs-target="#ytDaily<?= $task['task_id'] ?>" class="item bg-transparent">
                    <div class="detail">
                        <img src="<?= $task['task_icon'] ?>" alt="img" class="image-block imaged w48">
                        <div>
                            <strong class="text-white"><?= $task['task_name'] ?></strong>
                            <span class="fee text-secondary"><img src="assets/img/bl.svg" alt=""> +<?= number_format($task['task_reward']) ?></span>
                        </div>
                    </div>
                    <div class="right">
                        <div class="price text-secondary"> ></div>
                    </div>
                </a>
                <!-- Default Action Sheet -->
                <div class="modal fade action-sheet" id="ytDaily<?= $task['task_id'] ?>" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content bg-black">
                            <div class="modal-header text-end">
                                <button type="button" data-bs-dismiss="modal" class="btn btn-icon text-white me-1 mt-3 mb-0">
                                    <ion-icon name="close-outline"></ion-icon>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="action-sheet-content">
                                    
                                    <div class="mb-2 text-center">
                                        <img src="<?= $task['task_icon'] ?>" alt="">
                                        <h2 class="text-white mt-2"><?= $task['task_name'] ?></h2>
                                        <a target="_blank" href="<?= $task['task_condition'] ?>" class="btn btn-pink btn-<?= $task['task_id'] ?>">Visit</a> <br>
                                    </div>

                                    <script>
                                    // Function to remove the disabled attribute
                                        function removeDisabledAttribute() {
                                            // Get the form and button elements
                                            const form = document.querySelector('.form-<?= $task['task_id'] ?>');
                                            const button = form.querySelector('button[type="submit"]');

                                            // Remove the disabled attribute from the button
                                            button.disabled = false;
                                        }

                                        // Add an event listener to the "Visit" button
                                        document.querySelector('.btn-<?= $task['task_id'] ?>').addEventListener('click', removeDisabledAttribute);
                                    </script>

                                    <form action="" method="post" class="form-group basic form-<?= $task['task_id'] ?>">
                                        <input type="hidden" name="idDailyTasskk" value="<?= $task['task_id'] ?>">
                                        <button type="submit" name="visit" onclick="loadingForm()" class="btn btn-block btn-pink btn-lg"
                                            data-bs-dismiss="modal" disabled>
                                            <span class="fee"><img src="assets/img/bl.svg" alt=""> +<?= number_format($task['task_reward']) ?></span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- * Default Action Sheet -->
                <?php } ?>
                <!-- * item -->
            </div>
        </div>
        <?php } ?>
        <!-- * yt -->

        <!-- task -->
        <div class="section mt-4 mb-3">
            <div class="section-heading">
                <h4 class="title text-white">Daily Task</h4>
                <!-- <a href="app-transactions.html" class="link">View All</a> -->
            </div>
            <div class="transactions">
                <!-- daily login -->
                <a href="" data-bs-toggle="modal" data-bs-target="#dailyLogin" class="item bg-transparent">
                    <div class="detail">
                        <img src="assets/img/daily_login_zoonad.png" alt="img" class="image-block imaged w48">
                        <div>
                            <strong class="text-white">Daily Login</strong>
                            <span class="fee text-secondary"><img src="assets/img/bl.svg" alt=""> +<?= number_format($getReward) ?></span>
                        </div>
                    </div>
                    <div class="right">
                        <div class="price text-secondary"> ></div>
                    </div>
                </a>
                <!-- * daily login -->
                <?php  
                $otherTask = getDailyTask("OTHER");
                if(count($otherTask) >0){
                    foreach($otherTask as $task){
                ?>
                <!-- item -->
                <a href="" data-bs-toggle="modal" data-bs-target="#taskkDaily<?= $task['task_id'] ?>" class="item bg-transparent">
                    <div class="detail">
                        <img src="<?= $task['task_icon'] ?>" alt="img" class="image-block imaged w48">
                        <div>
                            <strong class="text-white"><?= $task['task_name'] ?></strong>
                            <span class="fee text-secondary"><img src="assets/img/bl.svg" alt=""> +<?= number_format($task['task_reward']) ?></span>
                        </div>
                    </div>
                    <div class="right">
                        <div class="price text-secondary"> ></div>
                    </div>
                </a>
                <!-- Default Action Sheet -->
                <div class="modal fade action-sheet" id="taskkDaily<?= $task['task_id'] ?>" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content bg-black">
                            <div class="modal-header text-end">
                                <button type="button" data-bs-dismiss="modal" class="btn btn-icon text-white me-1 mt-3 mb-0">
                                    <ion-icon name="close-outline"></ion-icon>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="action-sheet-content">
                                    
                                    <div class="mb-2 text-center">
                                        <img src="<?= $task['task_icon'] ?>" alt="">
                                        <h2 class="text-white mt-2"><?= $task['task_name'] ?></h2>
                                        <a target="_blank" href="<?= $task['task_condition'] ?>" class="btn btn-pink btn-<?= $task['task_id'] ?>">Visit</a> <br>
                                    </div>

                                    <script>
                                    // Function to remove the disabled attribute
                                        function removeDisabledAttribute() {
                                            // Get the form and button elements
                                            const form = document.querySelector('.form-<?= $task['task_id'] ?>');
                                            const button = form.querySelector('button[type="submit"]');

                                            // Remove the disabled attribute from the button
                                            button.disabled = false;
                                        }

                                        // Add an event listener to the "Visit" button
                                        document.querySelector('.btn-<?= $task['task_id'] ?>').addEventListener('click', removeDisabledAttribute);
                                    </script>

                                    <form action="" method="post" class="form-group basic form-<?= $task['task_id'] ?>">
                                        <input type="hidden" name="idDailyTasskk" value="<?= $task['task_id'] ?>">
                                        <button type="submit" name="visit" onclick="loadingForm()" class="btn btn-block btn-pink btn-lg"
                                            data-bs-dismiss="modal" disabled>
                                            <span class="fee"><img src="assets/img/bl.svg" alt=""> +<?= number_format($task['task_reward']) ?></span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- * Default Action Sheet -->
                <!-- * item -->
                 <?php }} ?>
            </div>
        </div>
        <!-- * task -->

        <!-- Default Action Sheet -->
        <div class="modal fade action-sheet" id="dailyLogin" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content bg-black">
                    <div class="modal-header text-end">
                        <button type="button" data-bs-dismiss="modal" class="btn btn-icon text-white me-1 mt-3 mb-0">
                            <ion-icon name="close-outline"></ion-icon>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="action-sheet-content">
                            
                            <div class="mb-2 text-center">
                                <img src="assets/img/daily_login_zoonad.png" alt="">
                                <h2 class="text-white mt-2">Day <?= $checkStreakLogin['streakDays'] ?></h2>
                                <span class="fee badge bg-pink"><img src="assets/img/bl.svg" alt=""> +<?= number_format($getReward) ?></span>
                                
                            </div>

                            <?php if($currentDate >= $checkStreakLogin['lastLogin']){ ?>
                                <form action="" method="post" class="form-group basic">
                                    <div class="d-flex">
                                        <button type="button" id="buy" name="claimDailyLogin" class="btn btn-lg btn-pink"
                                            data-bs-dismiss="modal" style="width: 100%;">
                                            Loading...</span>
                                        </button>
                                        <div id="ton-connect" style="display: none;"></div>
                                    </div>
                                </form>
                            <?php }else{ ?>
                                <div class="form-group basic">
                                    <button type="button" class="btn btn-block btn-lg text-white"
                                        data-bs-dismiss="modal">
                                        Comeback Tomorrow
                                    </button>
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- * Default Action Sheet -->

        <!-- ios style 16 -->
        <div id="alertdanger" class="notification-box">
            <div class="notification-dialog ios-style bg-danger">
                <div class="notification-header">
                    <div class="in">
                        <!-- <img src="assets/img/sample/avatar/avatar3.jpg" alt="image" class="imaged w24 rounded"> -->
                        <strong>Error</strong>
                    </div>
                    <div class="right">
                        <!-- <span>5 mins ago</span> -->
                        <a href="#" class="close-button">
                            <ion-icon name="close-circle"></ion-icon>
                        </a>
                    </div>
                </div>
                <div class="notification-content">
                    <div class="in">
                        <h3 class="subtitle">Messange</h3>
                        <div class="text" id="errorText">
                            Error
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="alertSuccess" class="notification-box">
            <div class="notification-dialog ios-style bg-success">
                <div class="notification-header">
                    <div class="in">
                        <!-- <img src="assets/img/sample/avatar/avatar3.jpg" alt="image" class="imaged w24 rounded"> -->
                        <strong>Success</strong>
                    </div>
                    <div class="right">
                        <!-- <span>5 mins ago</span> -->
                        <a href="#" class="close-button">
                            <ion-icon name="close-circle"></ion-icon>
                        </a>
                    </div>
                </div>
                <div class="notification-content">
                    <div class="in">
                        <h3 class="subtitle">Messange</h3>
                        <div class="text" id="successText">
                            Claim Success
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- * ios style 16 -->
        
        <script>
            function loadingForm() {
                // Mengatur tombol menjadi tidak dapat di-klik selama proses loading
                document.getElementById("loader").style.display  = "";
            }

        </script>
        
    </div>
    <!-- * App Capsule -->


    <!-- App Bottom Menu -->
    <div class="appBottomMenu no-border">
        <a href="home" class="item">
            <div class="col">
                <img class="icon-nav" src="assets/img/zoonad_home.png" alt="">
                <strong>Home</strong>
            </div>
        </a>
        <a href="mine" class="item">
            <div class="col">
            <img class="icon-nav" src="assets/img/zoonad_mine.png" alt="">
                <strong>Mine</strong>
            </div>
        </a>
        <a href="friends" class="item">
            <div class="col">
                <img class="icon-nav" src="assets/img/zoonad_friend.png" alt="">
                <strong>Friends</strong>
            </div>
        </a>
        <a href="earn" class="item active">
            <div class="col">
                <img class="icon-nav" src="assets/img/zoonad_earn.png" alt="">
                <strong>Earn</strong>
            </div>
        </a>
        <!-- <a href="wallet" class="item">
            <div class="col">
                <ion-icon name="wallet-outline"></ion-icon>
                <strong>Wallet</strong>
            </div>
        </a> -->
    </div>
    <!-- * App Bottom Menu -->


    <!-- ========= JS Files =========  -->
    <!-- Bootstrap -->
    <script src="assets/js/lib/bootstrap.bundle.min.js"></script>
    <!-- Ionicons -->
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <!-- Splide -->
    <script src="assets/js/plugins/splide/splide.min.js"></script>
    <!-- Base Js File -->
    <script src="assets/js/base.js"></script>
    <script src="assets/js/tap-all-page.js"></script>
    <?php if($_SESSION['alert_error'] != ""){ ?>
    <script>
        notification('alertdanger', 3000)
    </script>
    <?php } ?>
    <?php if($_SESSION['alert_success'] != ""){ ?>
    <script>
        notification('alertSuccess', 3000)
    </script>
    <?php } ?>

    <script>
            const themes = TON_CONNECT_UI.THEME;

            const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
                manifestUrl: 'https://zoonad.xyz/airdrop/tonconnect-manifest.json',
                buttonRootId: 'ton-connect'
            });
            // Atur opsi UI
            tonConnectUI.uiOptions = {
                uiPreferences: {
                    theme: themes.DARK,
                    borderRadius: 's'
                },
                twaReturnUrl: 'https://t.me/Zoonadbot?start'
            };


            // Fungsi untuk memperbarui teks tombol berdasarkan status koneksi
            function updateButtonStatus() {
                const buyButton = document.getElementById('buy');
                const currentIsConnectedStatus = tonConnectUI.connected;
                const idUserLogin = localStorage.getItem('idUser');

                if (currentIsConnectedStatus) {
                    buyButton.innerHTML = 'Claim'; // buy
                    localStorage.setItem('last_user_conneect', idUserLogin);
                } else {
                    localStorage.removeItem('last_user_conneect');
                    buyButton.innerHTML = 'Connect Wallet'; // connect
                }
            }

            async function getWalletBalance(address) {
                const apiUrl = `https://toncenter.com/api/v2/getAddressInformation?address=${address}`;
                try {
                    const response = await fetch(apiUrl, {
                        method: "GET",
                        headers: {
                            accept: "application/json",
                        },
                    });

                    const data = await response.json();

                    if (data.ok) {
                        return data.result.balance; // Kembalikan alamat yang sudah dikonversi
                    } else {
                        throw new Error(data.error || 'Gagal mendapatkan alamat wallet.');
                    }
                } catch (e) {
                    console.error('Error:', e);
                    throw e; // Lemparkan error jika terjadi masalah
                }
            }         

            async function getWalletAddress(rawAddress) {
                const apiUrl = `https://toncenter.com/api/v2/packAddress?address=${rawAddress}`;
                try {
                    const response = await fetch(apiUrl, {
                        method: "GET",
                        headers: {
                            accept: "application/json",
                        },
                    });

                    const data = await response.json();

                    if (data.ok) {
                        return data.result; // Kembalikan alamat yang sudah dikonversi
                    } else {
                        throw new Error(data.error || 'Gagal mendapatkan alamat wallet.');
                    }
                } catch (e) {
                    console.error('Error:', e);
                    throw e; // Lemparkan error jika terjadi masalah
                }
            }

            // Fungsi untuk menangani transaksi
            async function handleBuy() {
                const loader = document.getElementById("loader");
                const textError = document.getElementById("errorText");
                const textSuccess = document.getElementById("successText");
                const currentIsConnectedStatus = tonConnectUI.connected;
                if (!currentIsConnectedStatus) {
                    try {
                        await tonConnectUI.openModal(); // Membuka modal koneksi wallet
                    } catch (e) {
                        loader.style.display = "none"; // Sembunyikan loader
                        textError.textContent = "Error"
                        notification('alertdanger', 3000); // Notifikasi jika gagal koneksi wallet
                        return;
                    }                 
                }else{
                    loader.style.display = ""; // Sembunyikan loader
                    // const currentAccount = tonConnectUI.account;
                    // const encodedWalletAddress = encodeURIComponent(currentAccount.address);
                    // const walletAddress = await getWalletAddress(encodedWalletAddress); // Dapatkan wallet address yang benar
                    // const balance = await getWalletBalance(walletAddress); // Periksa saldo wallet
                    // const requiredAmount = "20000000"; // Jumlah TON yang dibutuhkan (dalam nanoton)
                    // if(BigInt(balance) < BigInt(requiredAmount)){
                    //     loader.style.display = "none"; // Sembunyikan loader
                    //     textError.textContent = "Balance is not enough, Your Balance : " + balance / 1000000000 + " TON"
                    //     notification('alertdanger', 3000);
                    // }else{
                    // }
                    const transaction = {
                        validUntil: Math.floor(Date.now() / 1000) + 60, // 60 detik
                        messages: [
                            {
                                address: "UQAyMObfm4vk1yxUoHo-amxMn95eeUB6nvhLYn16j7sWB0rG",
                                amount: "7000000"
                            }
                        ]
                    };
                    try {
                        const result = await tonConnectUI.sendTransaction(transaction);
                        try{
                            const response = await fetch('dailyLoginTon.php', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({result})
                            });
                            const responseData = await response.json();
                            if (responseData.success) {
                                localStorage.setItem('showSuccessNotification', true);
                                location.reload(); // Reload halaman
                            } else {
                                loader.style.display = "none"; // Sembunyikan loader
                                textError.textContent = "Error, Call Admin!"
                                notification('alertdanger', 3000);
                            }
                        } catch (phpError) {
                            loader.style.display = "none"; // Sembunyikan loader
                            textError.textContent = "error"
                            notification('alertdanger', 3000);
                        }
                        // alert('Transaction was sent successfully' + JSON.stringify(result));
                    } catch (e) {
                        loader.style.display = "none"; // Sembunyikan loader
                        textError.textContent = "Failed to Claim"
                        notification('alertdanger', 3000);
                    }
                }
            }


            // Inisialisasi teks tombol saat halaman pertama kali dimuat
            document.addEventListener('DOMContentLoaded', () => {
                
                const buyButton = document.getElementById('buy');
                buyButton.innerHTML = 'Checking Wallet...'; // Teks default sebelum status terdeteksi
                updateButtonStatus(); // Perbarui teks tombol berdasarkan status awal
            });

            // Tunggu perubahan status koneksi
            tonConnectUI.onStatusChange(updateButtonStatus);

            // Tambahkan event click ke tombol Buy
            document.getElementById('buy').addEventListener('click', handleBuy);
    </script>
</body>

</html>
<?php $_SESSION['alert_error'] = ""; $_SESSION['alert_success'] = "" ?>