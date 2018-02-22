---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Set-SenderFilterConfig

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-SenderFilterConfig cmdlet to modify the Sender Filter agent configuration.

## SYNTAX

```
Set-SenderFilterConfig [-Action <StampStatus | Reject>] [-BlankSenderBlockingEnabled <$true | $false>]
 [-BlockedDomains <MultiValuedProperty>] [-BlockedDomainsAndSubdomains <MultiValuedProperty>]
 [-BlockedSenders <MultiValuedProperty>] [-Confirm] [-DomainController <Fqdn>] [-Enabled <$true | $false>]
 [-ExternalMailEnabled <$true | $false>] [-InternalMailEnabled <$true | $false>]
 [-RecipientBlockedSenderAction <Reject | Delete>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Set-SenderFilterConfig -BlankSenderBlockingEnabled $true -BlockedDomainsAndSubdomains lucernepublishing.com -BlockedSenders @{Add="user1@contoso.com","user2@contoso.com"}
```

This example makes the following modifications to the Sender Filter agent configuration:

It enables blocking of blank senders.

It blocks messages from lucernepublishing.com and all subdomains.

It adds user1@contoso.com and user2@contoso.com to the blocked senders list without affecting any existing entries.

## PARAMETERS

### -Action
The Action parameter specifies the action that the Sender Filter agent takes on messages from blocked senders or domains. Valid input for this parameter is StampStatus or Reject. The default value is Reject.

```yaml
Type: StampStatus | Reject
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlankSenderBlockingEnabled
The BlankSenderBlockingEnabled parameter blocks or allows messages that don't contain a sender value in the SMTP command MAIL FROM. Valid input for this parameter is $true or $false. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockedDomains
The BlockedDomains parameter specifies the domain names to block. When the Sender Filter agent encounters a message from a domain on this list, the Sender Filter agent takes the action specified by the Action parameter.

Valid input for this parameter is one or more domains or subdomains. Wildcard characters aren't permitted. For example, if you specify the values contoso.com and marketing.contoso.com, only messages from those domains are blocked by the Sender Filter agent. Messages from sales.contoso.com aren't blocked by the Sender Filter agent.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

The maximum number of entries for this parameter is 800.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockedDomainsAndSubdomains
The BlockedDomainsAndSubdomains parameter specifies the domain names to block. When the Sender Filter agent encounters a message from a domain on this list, or from any of the domain's subdomains, the Sender Filter agent takes the action specified by the Action parameter.

Valid input for this parameter is one or more domains. Wildcard characters aren't permitted. For example, if you specify the value contoso.com, messages from contoso.com, sales.contoso.com, and all other subdomains of contoso.com are blocked by the Sender Filter agent.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

The maximum number of entries for this parameter is 800.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockedSenders
The BlockedSenders parameter specifies one or more SMTP email addresses to block. When the Sender Filter agent encounters a message from a sender on this list, the Sender Filter agent takes the action specified by the Action parameter.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

The maximum number of entries for this parameter is 800.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

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

### -Enabled
The Enabled parameter enables or disables sender filtering on your Exchange server. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalMailEnabled
The ExternalMailEnabled parameter enables or disables sender filtering on unauthenticated connections from external messaging servers. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalMailEnabled
The InternalMailEnabled parameter enables or disables sender filtering on authenticated connections from authoritative domains in your organization. Valid input for this parameter is $true or $false. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientBlockedSenderAction
The RecipientBlockedSenderAction parameter specifies the action that the Sender Filter agent takes on messages received from blocked senders that are defined by SafeList aggregation. SafeList aggregation adds blocked senders that are defined by your users in Microsoft Outlook or Outlook on the web to the Blocked Senders list that's used by the Sender Filter agent.

Valid input for this parameter is Delete or Reject. The default value is Reject.

```yaml
Type: Reject | Delete
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/2c7e6bd3-c35d-488b-9dc8-a9c36ed078f1.aspx)
