---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/disable-spwebtemplateforsitemaster
applicable: SharePoint Server 2016, SharePoint Server 2019
title: Disable-SPWebTemplateForSiteMaster
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Disable-SPWebTemplateForSiteMaster

## SYNOPSIS
Disables the site master in the farm.

## SYNTAX

```
Disable-SPWebTemplateForSiteMaster [-AssignmentCollection <SPAssignmentCollection>]
 [-CompatibilityLevel <Int32>] -Template <SPWebTemplatePipeBind> [<CommonParameters>]
```

## DESCRIPTION
Use the Disable-SPWebTemplateForSiteMaster cmdlet to disable a site master in the farm.

## EXAMPLES

### Example 1 
```
Disable-SPWebTemplateForSiteMaster -Template STS#0
```

This example disables the template in the site master of a farm.

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -CompatibilityLevel
Specifies the version of templates to use when creating a new SPSite object. This value sets the initial CompatibilityLevel value for the site collection.

When this parameter is not specified, the CompatibilityLevel parameter will default to the highest possible version for the web application depending on the SiteCreationMode setting.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Template
Specifies the name of the template. For example, SPSPERS#2.

```yaml
Type: SPWebTemplatePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

