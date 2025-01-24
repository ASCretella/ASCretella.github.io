<script language="JavaScript">

function setCookie(sName,sValue,iMinutes)
{
    if (iMinutes == 0)
        document.cookie = sName + "=" + sValue;
    else
    {
        dateExpires = new Date();
        dateExpires.setMinutes(dateExpires.getMinutes()+iMinutes);
        document.cookie = sName + "=" + sValue
                          + ";expires="
                          + dateExpires.toGMTString();
    }
}

function readCookie(sName)
{
    cookieChecker = document.cookie.split("; ");
    for (i=0; i<cookieChecker.length; i++)
    {
        if (sName == cookieChecker[i].split("=")[0])
            return cookieChecker[i].split("=")[1];
    }
    return ""; //returns nothing if cookie not found
}