---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Import-SPServerScaleOutDatabaseTenantData
schema: 2.0.0
---

# Import-SPServerScaleOutDatabaseTenantData

## SYNOPSIS

Imports data from the specified subscription id.

## SYNTAX

```
Import-SPServerScaleOutDatabaseTenantData -FilePath <String> -ServiceApplication <SPServiceApplicationPipeBind>
 -SiteSubscriptionId <Guid> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION

Use the Import-SPServerPScaleOutDatabaseTenantData cmdlet to import data from the specified file for the specified subscription id to the specified service application.

## EXAMPLES

### -------------EXAMPLE---------- 
```
PS C:\>Import-SPServerScaleOutDatabaseTenantData -FilePath "C:\TenantData.dat" -ServiceApplication $serviceApplication -SiteSubscriptionId "5CAF2F99-A75F-4239-B9CD-7FE63D1CE904"
```

This example imports data from the file at C:\TenantData.dat, to the specified service application and marks all the imported data with the site subscription id 5CAF2F99-A75F-4239-B9CD-7FE63D1CE904.


## PARAMETERS

### -FilePath

Specifies the absolute path to the data file.

An absolute path includes the root directory and all sub-directories.




```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceApplication

Specifies the service application to import the data to.

```yaml
Type: SPServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteSubscriptionId

Specifies the site subscription id to import the data from.
This value will replace the site subscription id value from the data file.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection

Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Clear-SPServerScaleOutDatabaseTenantData](Clear-SPServerScaleOutDatabaseTenantData.md)

[Export-SPServerScaleOutDatabaseTenantData](Export-SPServerScaleOutDatabaseTenantData.md)

