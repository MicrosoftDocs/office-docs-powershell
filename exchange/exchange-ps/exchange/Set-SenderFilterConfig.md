---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Set-SenderFilterConfig

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-SenderFilterConfig cmdlet to modify the Sender Filter agent configuration on a computer that has the Hub Transport server role or Edge Transport server role installed.

!!! Exchange Server 2013, Exchange Server 2016

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
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Anti-spam features" entry in the Transport Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Anti-spam features" entry in the Anti-spam and anti-malware permissions topic.

!!! Exchange Server 2016

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-SenderFilterConfig -BlankSenderBlockingEnabled $true -BlockedDomainsAndSubdomains *lucernepublishing.com -BlockedSenders user1@contoso.com,user2@contoso.com
```

This example makes the following modifications to the Sender Filter agent configuration:


It enables blocking of blank senders.

It blocks the domain and subdomains of lucernepublishing.com.

It defines two blocked senders.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-SenderFilterConfig -BlankSenderBlockingEnabled $true -BlockedDomainsAndSubdomains lucernepublishing.com -BlockedSenders @{Add="user1@contoso.com","user2@contoso.com"}
```

This example makes the following modifications to the Sender Filter agent configuration:


It enables blocking of blank senders.

It blocks messages from lucernepublishing.com and all subdomains.

It adds user1@contoso.com and user2@contoso.com to the blocked senders list without affecting any existing entries.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-SenderFilterConfig -BlankSenderBlockingEnabled $true -BlockedDomainsAndSubdomains lucernepublishing.com -BlockedSenders @{Add="user1@contoso.com","user2@contoso.com"}
```

This example makes the following modifications to the Sender Filter agent configuration:


It enables blocking of blank senders.

It blocks messages from lucernepublishing.com and all subdomains.

It adds user1@contoso.com and user2@contoso.com to the blocked senders list without affecting any existing entries.

## PARAMETERS

### -Action
!!! Exchange Server 2010

The Action parameter specifies the action that the Sender Filter agent takes on the message when a blocked sender or domain is found. The Action parameter takes the following values: StampStatus or Reject. The default value is Reject.



!!! Exchange Server 2013, Exchange Server 2016

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
!!! Exchange Server 2010

The BlankSenderBlockingEnabled parameter specifies whether all messages that don't contain a sender address are blocked. Valid input for the BlankSenderBlockingEnabled parameter is $true or $false. The default setting is $false. When the BlankSenderBlockingEnabled parameter is set to $true, all messages that don't contain a sender in the SMTP MAIL FROM: statement are blocked.



!!! Exchange Server 2013, Exchange Server 2016

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
!!! Exchange Server 2010

The BlockedDomains parameter specifies one or more domain names. When the Sender Filter agent encounters a message that's been sent from a domain on this list, the Sender Filter agent takes the action specified in the Action parameter. Wildcard characters, such as an asterisk (\*), are permitted. The maximum number of entries for this parameter is 800.



!!! Exchange Server 2013, Exchange Server 2016

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
!!! Exchange Server 2010

The BlockedDomainsAndSubdomains parameter specifies one or more domain names. When the Sender Filter agent encounters a message that's been sent from a domain or a subdomain on this list, the Sender Filter agent takes the action specified in the Action parameter. Wildcard characters, such as an asterisk (\*), are permitted. The maximum number of entries for this parameter is 800.



!!! Exchange Server 2013, Exchange Server 2016

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
!!! Exchange Server 2010

The BlockedSenders parameter specifies one or more SMTP addresses. When the Sender Filter agent encounters a message that's been sent by a sender on this list, the Sender Filter agent takes the action specified in the Action parameter. The maximum number of entries for this parameter is 800.



!!! Exchange Server 2013, Exchange Server 2016

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
!!! Exchange Server 2010

The Enabled parameter specifies whether the Sender Filter agent is enabled on the computer on which you're running the command. Valid input for the Enabled parameter is $true or $false. The default setting is $true. When the Enabled parameter is set to $true, the Sender Filter agent is enabled on the computer on which you're running the command.



!!! Exchange Server 2013, Exchange Server 2016

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
!!! Exchange Server 2010

The ExternalMailEnabled parameter specifies whether all messages from unauthenticated connections from servers external to your organization are processed by the Sender Filter agent. Valid input for the ExternalMailEnabled parameter is $true or $false. The default setting is $true. When the ExternalMailEnabled parameter is set to $true, all messages from unauthenticated connections from servers external to your organization are processed by the Sender Filter agent.



!!! Exchange Server 2013, Exchange Server 2016

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
!!! Exchange Server 2010

The InternalMailEnabled parameter specifies whether all messages from authenticated sender domains that belong to authoritative domains in the enterprise are passed through the Sender Filter agent for processing. Valid input for the InternalMailEnabled parameter is $true or $false. The default setting is $false. When the InternalMailEnabled parameter is set to $true, all messages from authenticated sender domains that belong to authoritative domains in the enterprise are passed through the Sender Filter agent for processing.



!!! Exchange Server 2013, Exchange Server 2016

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
!!! Exchange Server 2010

The RecipientBlockedSenderAction parameter specifies the action to take for messages sent by senders that were blocked by individual users in your organization. When the users add senders to their Blocked Senders list, SafeList aggregation adds these senders to the Blocked Senders list. This parameter specifies the action that the Sender Filter agent takes on the messages received from these senders. Valid input for the ExternalMailEnabled parameter is Delete or Reject.



!!! Exchange Server 2013

The RecipientBlockedSenderAction parameter specifies the action that the Sender Filter agent takes on messages received from blocked senders that are defined by SafeList aggregation. SafeList aggregation adds blocked senders that are defined by your users in Microsoft Outlook or Outlook Web App to the Blocked Senders list that's used by the Sender Filter agent.

Valid input for this parameter is Delete or Reject. The default value is Reject.



!!! Exchange Server 2016

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

