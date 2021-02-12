---
external help file: Microsoft.Office.Server.Search.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/set-spenterprisesearchcontentenrichmentconfiguration
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Set-SPEnterpriseSearchContentEnrichmentConfiguration
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Set-SPEnterpriseSearchContentEnrichmentConfiguration

## SYNOPSIS
Stores the specified content enrichment configuration to the search service application.


## SYNTAX

```
Set-SPEnterpriseSearchContentEnrichmentConfiguration
 -ContentEnrichmentConfiguration <ContentEnrichmentConfigurationPipeBind>
 -SearchApplication <SearchServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet validates the ContentEntrichmentConfiguration object and stores the provided configuration in the SearchServiceApplication.
Both a ContentEnrichmentConfiguration and a SearchServiceApplication object have to be provided.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).


## EXAMPLES

### ------------------EXAMPLE 1 ------------------
```
$config = New-SPEnterpriseSearchContentEnrichmentConfiguration
$config.Endpoint = "https://server/service"
$config.InputProperties = "Title", "Url"
$config.OutputProperties = "Title", "Url"
$ssa = Get-SPEnterpriseSearchServiceApplication
Set-SPEnterpriseSearchContentEnrichmentConfiguration -SearchApplication $ssa -ContentEnrichmentConfiguration $config
```

This example creates a new ContentEnrichmentConfiguration object.
The URL of the external web service is stored in the $config.Endpoint property.
The new ContentEnrichmentConfiguration is configured to use Title and URL, which are the managed properties that you want to send to the external web service. 
It is also configured to expect the external web service to output the same managed properties. 
The SearchServiceApplication object is retrieved and used for storing the newly created ContentEnrichmentConfiguration.


### ------------------EXAMPLE 2 ------------------
```
C:\PS>$config = New-SPEnterpriseSearchContentEnrichmentConfiguration
$config.Endpoint = "https://server/service"
$config.InputProperties = "Title"
$config.OutputProperties = "Title"
$config.Trigger = 'Contains(Title, "Example")'
$ssa = Get-SPEnterpriseSearchServiceApplication
Set-SPEnterpriseSearchContentEnrichmentConfiguration -SearchApplication $ssa -ContentEnrichmentConfiguration $config
```

This example creates a new ContentEnrichmentConfiguration object.
The URL of the external web service is stored in the $config.Endpoint property.
The new ContentEnrichmentConfiguration is configured to use Title, which is the managed property that you want to send to the external web service. 
It is also configured to expect the external web service to output the same managed property. 
The $config.Trigger is set to only send the managed property when the Boolean trigger expression is true, in this case when the managed property Title contains the string "Example".
The SearchServiceApplication object is retrieved, and used for storing the newly created ContentEnrichmentConfiguration.


## PARAMETERS

### -ContentEnrichmentConfiguration
Specifies the ContentEnrichmentConfiguration that should be stored in the SearchServiceApplication.

```yaml
Type: ContentEnrichmentConfigurationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SearchApplication
Specifies the SearchServiceApplication that contains the ContentEnrichmentConfiguration.

```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-SPEnterpriseSearchContentEnrichmentConfiguration](Get-SPEnterpriseSearchContentEnrichmentConfiguration.md)

[New-SPEnterpriseSearchContentEnrichmentConfiguration](New-SPEnterpriseSearchContentEnrichmentConfiguration.md)

[Remove-SPEnterpriseSearchContentEnrichmentConfiguration](Remove-SPEnterpriseSearchContentEnrichmentConfiguration.md)
