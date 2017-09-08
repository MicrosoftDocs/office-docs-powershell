---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Import-SPServerScaleOutDatabaseTenantData

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Import-SPServerScaleOutDatabaseTenantData -FilePath <String> -ServiceApplication <SPServiceApplicationPipeBind>
 -SiteSubscriptionId <Guid> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
```

## DESCRIPTION
Below Content Applies To: SharePoint Server 2013

Use the Import-SPServerPScaleOutDatabaseTenantData cmdlet to import data from the specified file for the specified subscription id to the specified service application.
Below Content Applies To: SharePoint Server 2016

{{Fill in the Description}}

## EXAMPLES

### -------------EXAMPLE---------- (SharePoint Server 2013)
```
C:\PS>Import-SPServerScaleOutDatabaseTenantData -FilePath "C:\ TenantData.dat" -ServiceApplication $serviceApplication -SiteSubscriptionId "5CAF2F99-A75F-4239-B9CD-7FE63D1CE904"
```

This example imports data from the file at C:\ TenantData.dat, to the specified service application and marks all the imported data with the site subscription id 5CAF2F99-A75F-4239-B9CD-7FE63D1CE904

### Example 1 (SharePoint Server 2016)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -FilePath
Below Content Applies To: SharePoint Server 2013

Specifies the absolute path to the data file.

An absolute path includes the root directory and all sub-directories.
Below Content Applies To: SharePoint Server 2016

{{Fill FilePath Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceApplication
Below Content Applies To: SharePoint Server 2013

Specifies the service application to import the data to.
Below Content Applies To: SharePoint Server 2016

{{Fill ServiceApplication Description}}

```yaml
Type: SPServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteSubscriptionId
Below Content Applies To: SharePoint Server 2013

Specifies the site subscription id to import the data from.
This value will replace the site subscription id value from the data file.
Below Content Applies To: SharePoint Server 2016

{{Fill SiteSubscriptionId Description}}

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Below Content Applies To: SharePoint Server 2013

Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.
Below Content Applies To: SharePoint Server 2016

{{Fill AssignmentCollection Description}}

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Below Content Applies To: SharePoint Server 2013

Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters Below Content Applies To: SharePoint Server 2016

Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Below Content Applies To: SharePoint Server 2013

Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters Below Content Applies To: SharePoint Server 2016

Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Clear-SPServerScaleOutDatabaseTenantData]()

[Export-SPServerScaleOutDatabaseTenantData]()

