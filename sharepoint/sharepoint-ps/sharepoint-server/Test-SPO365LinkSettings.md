---
external help file: Microsoft.Office.Server.UserProfiles.dll-help.xml
Module Name: Microsoft.Sharepoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/test-spo365linksettings
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Test-SPO365LinkSettings
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Test-SPO365LinkSettings

## SYNOPSIS
Validates whether the configured Office 365 hybrid site uses a valid template. 

## SYNTAX

```
Test-SPO365LinkSettings [-AssignmentCollection <SPAssignmentCollection>] -MySiteHostUrl <Uri>
 [<CommonParameters>]
```

## DESCRIPTION
Use the **Test-SPO365LinkSettings** cmdlet to validate a templated against a configured Office 365 hybrid site.

## EXAMPLES

### EXAMPLE 1
```powershell
Test-SPO365LinkSettings -MySiteHostUrl https://contoso-my.sharepoint.com/
```

This example test a template using the contoso-my.sharepoint site.

## PARAMETERS

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
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```
### -MySiteHostUrl
The root URL for the redirected pages

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).


## RELATED LINKS
[Get-SPO365LinkSettings](Get-SPO365LinkSettings.md)

[Set-SPO365LinkSettings](Set-SPO365LinkSettings.md)
