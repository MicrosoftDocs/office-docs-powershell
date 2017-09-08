---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Export-SPServerScaleOutDatabaseTenantData

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Export-SPServerScaleOutDatabaseTenantData [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 -FilePath <String> [-Force] -ServiceApplication <SPServiceApplicationPipeBind> -SiteSubscriptionId <Guid>
 [-WhatIf]
```

## DESCRIPTION
Below Content Applies To: SharePoint Server 2013

Use the Export-SPServerScaleOutDatabaseTenantData cmdlet to export the data of the specified subscription id to the specified file from the specified service application.
Below Content Applies To: SharePoint Server 2016

{{Fill in the Description}}

## EXAMPLES

### ----------EXAMPLE------- (SharePoint Server 2013)
```
C:\PS>Export-SPServerScaleOutDatabaseTenantData -FilePath "C:\ TenantData.dat" -ServiceApplication $serviceApplication -SiteSubscriptionId "5CAF2F99-A75F-4239-B9CD-7FE63D1CE904"
```

This example exports data for the site subscription with id 5CAF2F99-A75F-4239-B9CD-7FE63D1CE904 to the file at C:\ TenantData.dat, from the specified service application.

### Example 1 (SharePoint Server 2016)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -AssignmentCollection
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

### -FilePath
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

### -Force
{{Fill Force Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceApplication
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

### -WhatIf
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

[Import-SPServerScaleOutDatabaseTenantData]()

