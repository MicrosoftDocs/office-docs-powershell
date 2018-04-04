---
external help file: Microsoft.Exchange.TransportMailControl-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Import-JournalRuleCollection
schema: 2.0.0
---

# Import-JournalRuleCollection

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Import-JournalRuleCollection cmdlet to import journal rules from an XML file. You can import a journal rule collection you previously exported as a backup, or import rules you exported from an older version of Exchange.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Import-JournalRuleCollection [-FileData] <Byte[]> [[-Identity] <RuleIdParameter>] [-Confirm]
 [-DomainController <Fqdn>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Import-JournalRuleCollection cmdlet imports a journal rule collection you previously exported.

Importing a journal rule collection from an XML file removes or overwrites all pre-existing journal rules in your organization. Make sure that you have a backup of your current journal rule collection before you import and overwrite your current journal rules.

Importing file data is a two-step process. First you must load the data to a variable using the Get-Content cmdlet, and then use that variable to transmit the data to the cmdlet.

For more information about how to export a journal rule collection to an XML file, see Export-JournalRuleCollection.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
[Byte[]]$Data = Get-Content -Path "C:\JournalRules\ExportedJournalRules.xml" -Encoding Byte -ReadCount 0; Import-JournalRuleCollection -FileData $Data
```

This example imports journal rules from the XML file ExportedJournalRules.xml in a two-step process.

The first step retrieves journal rules from the previously exported XML file ExportedJournalRules.xml using the Get-Content cmdlet, and then stores the results in the variable $Data. The second step retrieves data from the variable $Data and imports journal rules to your organization, overwriting existing journal rules.

## PARAMETERS

### -FileData
The FileData parameter specifies the variable name that contains the content of the XML file.

A valid value for this parameter requires you to read the file to a byte-encoded object using the Get-Content cmdlet. For example, ([Byte[]](Get-Content -Encoding Byte -Path "C:\\My Documents\\\<filename\>" -ReadCount 0)).

```yaml
Type: Byte[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
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

### -Identity
The Identity parameter specifies the name of a journal rule to be imported.

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

[Online Version](https://technet.microsoft.com/library/89ecb780-0998-4c61-ba43-7d17b49df363.aspx)
