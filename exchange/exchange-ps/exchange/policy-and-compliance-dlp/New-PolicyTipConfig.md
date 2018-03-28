---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# New-PolicyTipConfig

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-PolicyTipConfig cmdlet to create custom Policy Tips in your organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-PolicyTipConfig [-Name] <String> -Value <String> [-Confirm] [-DomainController <Fqdn>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
New-PolicyTipConfig -Name en\NotifyOnly -Value "This message contains content that is restricted by Contoso company policy."
```

This example creates a custom Policy Tip with the following settings:

- Locale: English

- Action: NotifyOnly

- Policy Tip text: "This message contains content that is restricted by Contoso company policy."

### Example 2
```
New-PolicyTipConfig Url -Value "http://www.contoso.com/PolicyTipInformation"
```

This example sets the informational URL in Policy Tips to the value http://www.contoso.com/PolicyTipInformation.

## PARAMETERS

### -Name
The Name parameter specifies the custom Policy Tip you want to modify. Valid input for this parameter is one of the following values:

- \<Locale\>\\\<Action\>: Locale is a supported locale code. For example, en for English or fr for French. For more information about supported locales, see Supported languages for NDRs (https://technet.microsoft.com/library/aa996803.aspx#NDRLanguages). Action is one of the following Policy Tip actions: NotifyOnly, RejectOverride or Reject.

- Url

There can be only one custom Policy Tip with the value Url for the Name parameter. For the remaining Policy Tip actions, there can be only one custom Policy Tip for each combination of locale and action. For example, there can be only one custom Policy Tip with the Name value en\\NotifyOnly, but you can create additional custom Policy Tips with the values de\\NotifyOnly and fr\\NotifyOnly for the Name parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Value
The Value parameter specifies the text that's displayed by the Policy Tip. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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

[Online Version](https://technet.microsoft.com/library/0882bc55-0297-4d22-a141-1eb7187f5ea2.aspx)
