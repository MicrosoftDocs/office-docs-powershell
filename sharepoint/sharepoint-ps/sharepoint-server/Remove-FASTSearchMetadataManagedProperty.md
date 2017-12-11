---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Remove-FASTSearchMetadataManagedProperty
---

# Remove-FASTSearchMetadataManagedProperty

## SYNOPSIS
Removes a managed property from the Microsoft FAST Search Server 2010 for SharePoint system.

## SYNTAX

### Name
```
Remove-FASTSearchMetadataManagedProperty [-Name] <String> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

### ManagedProperty
```
Remove-FASTSearchMetadataManagedProperty -ManagedProperty <ManagedProperty> [-Confirm] [-Force] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This command removes a managed property and its content from the FAST Search Server 2010 for SharePoint system.
If the managed property is mapped into any full text indexes, the mapping is also removed.
If there are any crawled property mappings to this managed property, those mappings are also removed.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Remove-FASTSearchMetadataManagedProperty -Name title
```

This example removes the managed property named "title" from the system.
It will ask for confirmation before going through with the removal unless Force is specified.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$createdby = Get-FASTSearchMetadataManagedProperty -name CreatedBy
Remove-FASTSearchMetadataManagedProperty -ManagedProperty $createdby -Force
```

This example removes the managed property represented by the object $managedproperty.
The object is retrieved by calling Get-FASTSearchMetaDataManagedProperty, but any other call that returns a ManagedPropertyImpl object is acceptable.

No confirmation is required, since the Force parameter is specified.

## PARAMETERS

### -Name
The name of the managed property to remove.

```yaml
Type: String
Parameter Sets: Name
Aliases: ManagedPropertyName, N
Applicable: FAST Server for SharePoint 2010

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -ManagedProperty
An object that represents the managed property to remove.

```yaml
Type: ManagedProperty
Parameter Sets: ManagedProperty
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Confirm
Activates user prompting to confirm the operation.
If set, prompting is activated.
If Confirm is false (-Confirm:$false), confirmation prompting is not used.

In cases where Confirm is not specified, the cmdlet will prompt if the $ConfirmPreference shell variable is equal to or greater than the ConfirmImpact setting of the cmdlet (HIGH).

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Overrides any user prompting settings, so that confirmation of the operation is not required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

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
Applicable: FAST Server for SharePoint 2010

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

[Get-FASTSearchMetadataManagedProperty]()

[New-FASTSearchMetadataManagedProperty]()

[Set-FASTSearchMetadataManagedProperty]()

