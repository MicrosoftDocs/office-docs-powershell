---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Add-SPUserLicenseMapping

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Maps a security group, forms-based role, or claim to a SharePoint user license.



## SYNTAX

```
Add-SPUserLicenseMapping
 -Mapping <System.Collections.Generic.List`1[Microsoft.SharePoint.PowerShell.SPUserLicenseMapping]>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Add-SPUserLicenseMapping cmdlet maps a claim, Active Directory Domain Services (AD DS) security group, or forms-based role to a SharePoint user license for a farm or web application.
To specify a mapping to a specific web application, use the WebApplication parameter.
If you do not specify parameters, mapping applies to the entire SharePoint farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ---------------EXAMPLE 1------------------- (SharePoint Server 2013)
```
C:\PS>$a = New-SPUserLicenseMapping -SecurityGroup yoursecuritygroup -License Enterprise

C:\PS>Add-SPUserLicenseMapping -Mapping $a
```

This example adds user mappings for the entire farm.

### ---------------EXAMPLE 1------------------- (SharePoint Server 2016)
```
C:\PS>$a = New-SPUserLicenseMapping -SecurityGroup yoursecuritygroup -License Enterprise

C:\PS>Add-SPUserLicenseMapping -Mapping $a
```

This example adds user mappings for the entire farm.

## PARAMETERS

### -Mapping
```yaml
Type: System.Collections.Generic.List`1[Microsoft.SharePoint.PowerShell.SPUserLicenseMapping]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

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

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters

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

## OUTPUTS

## NOTES

## RELATED LINKS

[Disable-SPUserLicensing]()

[Enable-SPUserLicensing]()

[Get-SPUserLicenseMapping]()

[Remove-SPUserLicenseMapping]()

