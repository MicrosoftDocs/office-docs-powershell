---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
author: vesajuvonen
ms.author: vesaj
ms.reviewer:
---
# Get-PnPHealthScore

## SYNOPSIS
Retrieves the healthscore of the site given in his parameter

## DESCRIPTION
Retrieves the current health score value of the server which is a value between 0 and 10. Lower is better.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPHealthScore
```

This will retrieve the current health score of the server.

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPHealthScore -Url https://contoso.sharepoint.com
```

### ------------------EXAMPLE 3------------------
This is an advanced example, where you want to get all hte HealthScore of all your Onedrive for Business sites, tenant wide.
The user that we use, has double authentication enabled, so we will need to create a [Application Password](https://support.office.com/en-gb/article/create-an-app-password-for-office-365-3e7c860f-bda4-4441-a618-b53953ee1183)

This will use double connection to [Sharepoint Online](https://docs.microsoft.com/en-us/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps#to-connect-with-a-user-name-and-password) and [Sharepoint PNP Online](https://docs.microsoft.com/en-us/powershell/module/sharepoint-pnp/connect-pnponline?view=sharepoint-ps) modules.

```powershell
$username ="<Global Admin UPN>" #ex = jortega@contoso.com
$appPassword= "xxxxxxxxxxxxxxxx" #ex: "gbntxrfnxxxxxxxx"
$adminUrl = "https://<Tenant>-admin.sharepoint.com" #found when you open Administration/Admin Panels/Sharepoint/that root path

#dont modify anything below here
$cred = New-Object pscredential -ArgumentList $username, (  ConvertTo-SecureString -String $appPassword -AsPlainText -Force)
#connects to SPO
Connect-SPOService -Credential $cred -Url $adminUrl #to get the my addresses
Connect-PnPOnline -Credentials $cred -Url $adminUrl #to get the health

Get-SPOSite -IncludePersonalSite $true -Limit all -Filter "Url -like '-my.sharepoint.com/personal/" |select Url | %{ 
     New-object psobject -Property @{"Page"= $_.Url;"HealthScore"=(Get-PnPHealthScore -Url $_.URL)}
}
```

This will get all the health of all the Oneddrive for business site and show them as an object into the screen.
This Cmdlet works "per URL" so you'd need to have a list of sites before running the script to get the health of the sites. This is just an interesting example for a passionate documenter.


## PARAMETERS

### -Url
Receives an string that represents the site in your Tenant that you want to explore the health.


```yaml
Type: string
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

### System.Int32

Returns a int value representing the current health score value of the server.

## NOTES

## RELATED LINKS

[Connect-PnPOnline](Connect-PnPOnline.md)

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)







