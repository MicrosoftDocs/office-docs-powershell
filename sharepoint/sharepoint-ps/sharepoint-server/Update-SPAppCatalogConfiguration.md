---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Update-SPAppCatalogConfiguration
schema: 2.0.0
---

# Update-SPAppCatalogConfiguration

## SYNOPSIS
Sets a specific site collection as the App Catalog site collection.

## SYNTAX

```
Update-SPAppCatalogConfiguration [-Site] <SPSitePipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-Force] [-SkipWebTemplateChecking] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the Update-SPAppCatalogConfiguration cmdlet to set a specific site collection as the App Catalog site collection. The App Catalog site collection contains catalogs for Apps for SharePoint and Apps for Office. It is used to help ITPro administrators distribute SharePoint Apps and Office Apps to their end users. Each Web Application or Tenancy can have 1 App Catalog Site collection associated to it.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at Windows PowerShell for SharePoint Server 2016 reference (http://go.microsoft.com/fwlink/p/?LinkId=671715).

## EXAMPLES

### ---------------EXAMPLE-----------
```
PS C:\>Update-SPAppCatalogConfiguration -Site http://contoso/sites/appcatalog_1 -Force:$true -SkipWebTemplateChecking:$true
```
This example sets http://contoso/sites/appcatalog_1 as the app catalog site collection for the tenant it belongs to.

## PARAMETERS

### -Site
Specifies the URL or GUID of the site collection to be set as the app catalog site collection.


```yaml
Type: SPSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.


```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Specifies to force marking the site collection even if there are validation errors.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipWebTemplateChecking
Specifies whether to skip checking if the template of the site is APCATALOG#0.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPSitePipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
