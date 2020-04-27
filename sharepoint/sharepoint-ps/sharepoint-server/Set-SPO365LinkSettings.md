---
external help file: Microsoft.Office.Server.UserProfiles.dll-help.xml
Module Name: Microsoft.Sharepoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/set-spo365linksettings
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Set-SPO365LinkSettings
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Set-SPO365LinkSettings

## SYNOPSIS
Set SharePoint O365 Link Settings for Hybrid Configuration.

## SYNTAX

```
Set-SPO365LinkSettings -MySiteHostUrl <String> [-Audiences <String[]>] [-RedirectSites <Boolean>]
 [-HybridAppLauncherEnabled <Boolean>] [-OnedriveDefaultToCloudEnabled <Boolean>]
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
Use the **Set-SPO365LinkSettings** cmdlet to configure some of Hybrid features (Hybrid site redirection, OneDrive redirection, ODB default to Cloud) without running Hybrid Configuration Wizard.

To run this cmdlet requires farm administrator permission and that the user account has full control access to the User Profile Application service. 

## EXAMPLES

### EXAMPLE 1
```powershell
 Set-SPO365LinkSettings -MySiteHostUrl https://contoso-my.sharepoint.com/ -RedirectSites $true
```

This example sets the mysite host URL to contoso-my.sharepoint.com

## PARAMETERS

### -Audiences
Sets the user(s) for whom redirection is active.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -HybridAppLauncherEnabled
Sets a flag that indicates whether app launcher get data from SharePoint Online (SPO) is allowed

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -MySiteHostUrl
Sets the root URL for the redirected pages.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -OnedriveDefaultToCloudEnabled
Sets a flag that indicates whether Local Onedrive is redirected to SPO OneDrive.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```
### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).



## RELATED LINKS

[Get-SPO365LinkSettings](Get-SPO365LinkSettings.md)

[Test-SPO365LinkSettings](Test-SPO365LinkSettings.md)


