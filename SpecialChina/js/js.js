/**
 * Created by Administrator on 2017/5/15 0015.
 */
//����ϲ��
$(function() {
    //�����룬��ǰdiv��cover���ֵܱ�none
    $(".caibox").mouseover(function() {
        //��������
        $(this).(".cover").css("display","none");
        //��ǰ��ʾ
        $(this).(".cover").css("display","block");
    });
    //����ƿ� �ָ�����
    $(".caibox").mouseout(function() {
        $(".caibox").css("display","none");
    });
});