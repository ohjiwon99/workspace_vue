<template>
    <div>
        <div id="wrap">

            <AppHeader />

            <div id="container" class="clearfix">
                <div id="aside">
                    <h2>게시판</h2>
                    <ul>
                        <li><a href="">일반게시판</a></li>
                        <li><a href="">댓글게시판</a></li>
                    </ul>
                </div>
                <!-- //aside -->

                <div id="content">

                    <div id="content-head">
                        <h3>일반게시판</h3>
                        <div id="location">
                            <ul>
                                <li>홈</li>
                                <li>게시판</li>
                                <li class="last">일반게시판</li>
                            </ul>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <!-- //content-head -->

                    <div id="board">
                        <div id="read">
                            <form action="#" method="get">
                                <!-- 작성자 -->
                                <div class="form-group">
                                    <span class="form-text">작성자</span>
                                    <span class="form-value">정우성</span>
                                </div>

                                <!-- 조회수 -->
                                <div class="form-group">
                                    <span class="form-text">조회수</span>
                                    <span class="form-value">123</span>
                                </div>

                                <!-- 작성일 -->
                                <div class="form-group">
                                    <span class="form-text">작성일</span>
                                    <span class="form-value">2020-03-02</span>
                                </div>

                                <!-- 제목 -->
                                <div class="form-group">
                                    <span class="form-text">제 목</span>
                                    <span class="form-value">여기에는 글제목이 출력됩니다.</span>
                                </div>

                                <!-- 내용 -->
                                <div id="txt-content">
                                    <span class="form-value">
                                        여기에는 본문내용이 출력됩니다.<br>
                                        여기에는 본문내용이 출력됩니다.<br>
                                        여기에는 본문내용이 출력됩니다.<br>
                                        여기에는 본문내용이 출력됩니다.<br>
                                        여기에는 본문내용이 출력됩니다.<br>
                                        여기에는 본문내용이 출력됩니다.<br>
                                        여기에는 본문내용이 출력됩니다.<br>
                                        여기에는 본문내용이 출력됩니다.<br>
                                    </span>
                                </div>

                                <a id="btn_modify" href="">수정</a>
                                <a id="btn_modify" href="">목록</a>

                            </form>
                            <!-- //form -->
                        </div>
                        <!-- //read -->
                    </div>
                    <!-- //board -->
                </div>
                <!-- //content  -->

            </div>
            <!-- //container  -->
            <AppFooter />
            <!-- //footer -->
        </div>
        <!-- //wrap -->
    </div>
</template>

<script>
import "@/assets/css/board.css"
import AppFooter from "@/components/AppFooter.vue"
import AppHeader from "@/components/AppHeader.vue"

export default {
    name: "BoardReadView",
    components: {
        AppFooter, AppHeader
    },
    data() {
        return {};
    },
    methods: {},
    created() { }
};
</script>