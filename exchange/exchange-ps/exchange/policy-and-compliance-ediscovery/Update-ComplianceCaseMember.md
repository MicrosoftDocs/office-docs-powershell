---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
applicable: Office 365 Security & Compliance Center
title: Update-ComplianceCaseMember
schema: 2.0.0
---

# Update-ComplianceCaseMember

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Update-ComplianceCaseMember cmdlet to replace all members of eDiscovery cases in the Security & Compliance Center. To add or remove existing members, use the Add-ComplianceCaseMember and Remove-ComplianceCaseMember cmdlets.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Update-ComplianceCaseMember [-Case] <String> -Members <String[]> [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You use eDiscovery cases to control who can create, access, and manage compliance searches in your organization. You use the New-ComplianceCase cmdlet to create eDiscovery cases. The eDiscovery Manager who created the case is automatically added as a member of the case.

To add a member of an eDiscovery case, the user needs to be a member of the Reviewer or eDiscovery Manager role groups. When a member of the eDiscovery Manager role group is a member of an eDiscovery case, the user can:

- Add and remove case members.

- Create and edit compliance searches associated with a case.

- Perform compliance actions (for example, export) on the results of a compliance search.

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```
Update-ComplianceCaseMember -Case "Case 5150" -Members chris@contoso.com,michelle@contoso.com,laura@contoso.com,julia@contoso.com
```

This example replaces the existing members of the eDiscovery case named Case 5150 with new members.

## PARAMETERS

### -Case
The Case parameter specifies the name of the eDiscovery case that you want to modify. If the value contains spaces, enclose the value in quotation marks (").

To see the available eDiscovery cases, use the Get-ComplianceCase cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Members
The Members parameter specifies the users that will replace the current eDiscovery case members. You can use any value that uniquely identifies the user.

For example:

- Name

- Display name

- Distinguished name (DN)

- Canonical DN

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

[Online Version](https://technet.microsoft.com/library/00690cc1-5bde-4fcb-bc8f-87372504359d.aspx)

