---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Remove-FASTSearchSearchSettingGroup
---

# Remove-FASTSearchSearchSettingGroup

## SYNOPSIS
Deletes a Microsoft FAST Search Server 2010 for SharePoint search setting group.

## SYNTAX

```
Remove-FASTSearchSearchSettingGroup -Name <String> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet deletes a FAST Search Server 2010 for SharePoint search setting group.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Remove-FASTSearchSearchSettingGroup -Name marketinggroup
```

This example deletes the "marketinggroup" search setting group.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Remove-FASTSearchSearchSettingGroup -Name marketinggroup -Force
```

This example deletes the "marketinggroup" search setting group without being prompted to confirm the operation.

### ---------------EXAMPLE 3----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Remove-FASTSearchSearchSettingGroup -Name marketinggroup -WhatIf
```

This example describes what would happen if you executed the Remove-FASTSearchSearchSettingGroup cmdlet.

## PARAMETERS

### -Name
The name of the search setting group to delete.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Activates user prompting to confirm the operation.
If set, prompting is activated.

If Confirm is false (-Confirm:$false), you will not be prompted.

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
Overrides any user prompting settings so the user is not asked to confirm the operation.

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

[New-FASTSearchSearchSettingGroup](New-FASTSearchSearchSettingGroup.md)

[Get-FASTSearchSearchSettingGroup](Get-FASTSearchSearchSettingGroup.md)

