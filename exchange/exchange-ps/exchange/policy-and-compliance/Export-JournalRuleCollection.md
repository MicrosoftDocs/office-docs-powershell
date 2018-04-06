---
external help file: Microsoft.Exchange.TransportMailControl-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Export-JournalRuleCollection
schema: 2.0.0
---

# Export-JournalRuleCollection

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Export-JournalRuleCollection cmdlet to export the journal rules in your organization to an XML file.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Export-JournalRuleCollection [[-Identity] <RuleIdParameter>] [-Confirm] [-DomainController <Fqdn>]
 [-ExportLegacyRules] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You can use the Export-JournalRuleCollection cmdlet to export journal rules in your organization to create a backup copy of your rules.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$file = Export-JournalRuleCollection; Set-Content -Path "C:\MyDocs\JournalRules.xml" -Value $file.FileData -Encoding Byte
```

This example exports journal rules in a two-step process. In the first step, the Export-JournalRuleCollection cmdlet exports journal rules to the variable $file. In the second step, the Set-Content cmdlet saves the exported data to the XML file JournalRules.xml.

### -------------------------- Example 2 --------------------------
```
$file = Export-JournalRuleCollection -ExportLegacyRules; Set-Content -Path "C:\MyDocs\Ex2007-JournalRules.xml" -Value $file.FileData -Encoding Byte
```

In Exchange Server 2010, this example exports legacy journal rules to an XML file using the two-step process similar to the preceding example. In the first step, the Export-JournalRuleCollection cmdlet is used with the ExportLegacyRules switch to export legacy rules to the array $file. In the second step, the exported data is saved to the XML file Ex2007-JournallRules.xml.

## PARAMETERS

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExportLegacyRules
The ExportLegacyRules switch specifies whether to export Exchange 2007 journal rules.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the name of a journal rule.

```yaml
Type: RuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/c6309ab0-77fe-4feb-b2ac-4844de841996.aspx)
