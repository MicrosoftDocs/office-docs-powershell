---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Add-SPServerScaleOutDatabase

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

{{Fill in the Synopsis}}



## SYNTAX

```
Add-SPServerScaleOutDatabase -DatabaseName <String> -ServiceApplication <SPServiceApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-DatabaseCredentials <PSCredential>]
 [-DatabaseFailoverServer <String>] [-DatabaseServer <String>] [-WhatIf] [-DeferUpgradeActions]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:**SharePoint Server 2013

Use the Add-SPServerScaleOutDatabase cmdlet to add an existing scale-out database to the specified service application by using the ServiceApplication parameter or creates a new scale-out database and adds it to the specified service application.

**Below Content Applies To:**SharePoint Server 2016

{{Fill in the Description}}



## EXAMPLES

### -------------EXAMPLE------------ (SharePoint Server 2013)
```
C:\PS>$serviceApplication = Get-SPServiceApplication -Name "AppManagement"

C:\PS>Add-SPServerScaleOutDatabase -ServiceApplication $serviceApplication
```

This example adds a new or existing scale out database into a specific service application.

### Example 1 (SharePoint Server 2016)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -DatabaseName
**Below Content Applies To:**SharePoint Server 2013

Specifies the name of the database to add to the specified service application.



**Below Content Applies To:**SharePoint Server 2016

{{Fill DatabaseName Description}}



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceApplication
**Below Content Applies To:**SharePoint Server 2013

Specifies the service application of the scale-out databases.



**Below Content Applies To:**SharePoint Server 2016

{{Fill ServiceApplication Description}}



```yaml
Type: SPServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
**Below Content Applies To:**SharePoint Server 2013

Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.



**Below Content Applies To:**SharePoint Server 2016

{{Fill AssignmentCollection Description}}



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
**Below Content Applies To:**SharePoint Server 2013

Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters



**Below Content Applies To:**SharePoint Server 2016

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

### -DatabaseCredentials
**Below Content Applies To:**SharePoint Server 2013

Specifies the owner's credentials of the scale-out database to be added to the service application.



**Below Content Applies To:**SharePoint Server 2016

{{Fill DatabaseCredentials Description}}



```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseFailoverServer
**Below Content Applies To:**SharePoint Server 2013

The name of the failover server for the scale-out database to be added.



**Below Content Applies To:**SharePoint Server 2016

{{Fill DatabaseFailoverServer Description}}



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseServer
**Below Content Applies To:**SharePoint Server 2013

The name of the server hosting the scale-out database to be added.
If a value is not provided, the default database server will be used.



**Below Content Applies To:**SharePoint Server 2016

{{Fill DatabaseServer Description}}



```yaml
Type: String
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
**Below Content Applies To:**SharePoint Server 2013

Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters



**Below Content Applies To:**SharePoint Server 2016

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

### -DeferUpgradeActions
{{Fill DeferUpgradeActions Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

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

[Get-SPServerScaleOutDatabase]()

[Remove-SPServerScaleOutDatabase]()

[Split-SPServerScaleOutDatabase]()

