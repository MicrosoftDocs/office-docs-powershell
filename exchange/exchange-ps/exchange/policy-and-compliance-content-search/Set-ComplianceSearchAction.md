---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
applicable: Office 365 Security & Compliance Center
title: Set-ComplianceSearchAction
schema: 2.0.0
monikerRange: "o365scc-ps"
---

# Set-ComplianceSearchAction

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-ComplianceSearchAction cmdlet to change the export key on export compliance search actions in on-premises Exchange.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-ComplianceSearchAction [-Identity] <ComplianceSearchActionIdParameter> [-ChangeExportKey] [-Confirm]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

This cmdlet is available in the Mailbox Search role. By default, this role is assigned only to the Discovery Management role group, and not to the Organization Management role group.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-ComplianceSearchAction -Identity "Project X_Export" -ChangeExportKey
```

This example changes the export key on the export compliance search action named Project X_Export.

## PARAMETERS

### -Identity
The Identity parameter specifies the compliance search action that you want to modify. You can use any value that uniquely identifies the compliance search action. For example:

- Name: The compliance search action name uses the syntax `<Compliance Search Name>_<Action>` (for example, Case 1234_Preview).

- JobRunId (GUID)

```yaml
Type: ComplianceSearchActionIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ChangeExportKey
The ChangeExportKey switch creates a new export key for the compliance search action. You don't need to specify a value with this switch.

This parameter is only meaningful on export compliance search actions.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New and Set cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch doesn't work in the Office 365 Security & Compliance Center.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/cadf2068-ed32-49a3-98f1-da5a516689cc.aspx)
