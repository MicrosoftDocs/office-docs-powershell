---
external help file: Microsoft.Online.SharePoint.PowerShell.dll-Help.xml
Module Name: microsoft.online.sharepoint.powershell
online version:
applicable: SharePoint Online
title: Export-SPOUserInfo
schema: 2.0.0
---


# Export-SPOQueryLogs

## SYNOPSIS
Export query logs for a user in an Office 365 tenant.

## SYNTAX

```
Export-SPOQueryLogs -LoginName <String> [-StartTime <DateTime>] [-OutputFolder <String>] [<CommonParameters>]
```

```
Export-SPOUserInfo -LoginName <String> -Site <SpoSitePipeBind> -OutputFolder <String> [<CommonParameters>]
```

## DESCRIPTION
Export the query logs for a user in an Office 365 tenant. The result of the export is stored in the current working folder or a specified folder, in the two files loginName_queries.csv and loginName_personalQueries.csv.

You have to be a tenant admin to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).


## EXAMPLES

###   ------------ Example 1 --------------------
```
Export-SPOUserInfo -LoginName joe.healy@contoso.com -site https://contoso.sharepoint.com/sites/sc1 -OutputFolder "C:\users\admin\exportfolder"
```
Example 1 exports a user data who has the e-mail address joe.healy@contoso.com from the site collection https://contoso.sharepoint.com/sites/sc1 to folder C:\users\admin\exportfolder.


###   ------------ Example 2 --------------------
```
$sites = Get-SPOSite -IncludePersonalSite $true
$user = "joe.healy@contoso.com"
foreach ($site in $sites)
{
Export-SPOUserInfo -LoginName $user -site $site.Url -OutputFolder
"C:\users\admin\exportfolder"
}
```
Example 2 exports user data who has email address joe.healy@contoso.com from all site collections to folder C:\users\admin\exportfolder.

## PARAMETERS

### -LoginName
Specifies the login name of the user to export.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Site
Specifies the URL of the site collection to which you want to export the user.

```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutputFolder
Target folder where teh CSV file is generated.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartTime
{{Fill StartTime Description}}

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Introduction to the SharePoint Online management shell]()

[Set up the SharePoint Online Management Shell Windows PowerShell environment]()

[New-SPOSiteGroup](New-SPOSiteGroup.md)

[Get-SPOUser](Get-SPOUser.md)

[Set-SPOUser](Set-SPOUser.md)

[Remove-SPOUser](Remove-SPOUser.md)

