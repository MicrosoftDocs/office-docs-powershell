---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: New-CaseHoldRule
schema: 2.0.0
monikerRange: "o365scc-ps"
---

# New-CaseHoldRule

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the New-CaseHoldRule cmdlet to create new case hold rules in the Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-CaseHoldRule [-Name] <String> -Policy <PolicyIdParameter> [-Comment <String>] [-Confirm] [-ContentMatchQuery <String>] [-Disabled <$true | $false>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to add the case hold rule to an existing case hold policy using the Policy parameter. Only one rule can be added to each case hold policy.

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-CaseHoldRule -Name "2016 Budget Spreadsheets" -Policy "Internal Company Policy" -ContentMatchQuery "filename:2016 budget filetype:xlsx"
```

This example creates a new case hold rule named 2016 Budget Spreadsheets and adds it to the existing case hold policy named "Internal Company Policy". The rule applies to Excel worksheets that contain the phrase 2016 budget, such as "2016 budget planning.xlsx" and "2016 budget review.xlsx"

### -------------------------- Example 2 --------------------------
```
New-CaseHoldRule -Name "Contoso Case 07172018 Hold 1" -Policy "Contoso Case 07172018" -ContentMatchQuery "received:12/01/2016..12/31/2017"
```

This example places email messages received by the recipients between December 1, 2016 and December 31, 2017 on hold.

## PARAMETERS

### -Name
The Name parameter specifies a unique name for the case hold rule. If the value contains spaces, enclose the value in quotation marks.

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

### -Policy
The Policy parameter specifies the case holdpolicy that contains the rule. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment
The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

```yaml
Type: String
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

- Destructive cmdlets (for example, `Remove-*` cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, `New-*` and `Set-*` cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -ContentMatchQuery
The ContentMatchQuery parameter specifies a content search filter. Use this parameter to create a query-based hold so only the content that matches the specified search query is placed on hold.

This parameter uses a text search string or a query that's formatted by using the Keyword Query Language (KQL). For more information about KQL, see Keyword Query Language syntax reference (https://go.microsoft.com/fwlink/p/?linkid=269603).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Disabled
The Disabled parameter specifies whether the case hold rule is enabled or disabled. Valid values are:

- $true: The rule is disabled.

- $false: The rule is enabled. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
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

[Online Version](https://technet.microsoft.com/library/f477b3fe-a293-4803-9af5-ae451b24057f.aspx)
