---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Set-IPBlockListConfig

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-IPBlockListConfig cmdlet to modify the IP Block list configuration on a computer that has the Edge Transport server role or the Hub Transport server role installed.

!!! Exchange Server 2013

This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange Server 2013.

Use the Set-IPBlockListConfig cmdlet to modify the IP Block list configuration that's used by the Connection Filtering agent on Edge Transport servers.

!!! Exchange Server 2016

This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange.

Use the Set-IPBlockListConfig cmdlet to modify the IP Block list configuration that's used by the Connection Filtering agent on Edge Transport servers.

## SYNTAX

```
Set-IPBlockListConfig [-Confirm] [-DomainController <Fqdn>] [-Enabled <$true | $false>]
 [-ExternalMailEnabled <$true | $false>] [-InternalMailEnabled <$true | $false>]
 [-MachineEntryRejectionResponse <AsciiString>] [-StaticEntryRejectionResponse <AsciiString>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The IP Block list is used by the Connection Filter agent. The Connection Filter agent acts on the IP address of the remote server that initiates the SMTP connection to determine what action, if any, to take on an incoming message.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Anti-spam features" entry in the Transport Permissions topic.

!!! Exchange Server 2013

On Edge Transport servers, the Connection Filtering agent acts on the IP address of the incoming SMTP connection to determine what action, if any, to take on an incoming message.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Anti-spam features - Edge Transport" entry in the Anti-spam and anti-malware permissions topic.

!!! Exchange Server 2016

On Edge Transport servers, the Connection Filtering agent acts on the IP address of the incoming SMTP connection to determine what action, if any, to take on an incoming message.

On Edge Transport servers, you need to be a member of the local Administrators group to run this cmdlet.

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-IPBlockListConfig -InternalMailEnabled $true
```

This example enables the IP Block list on messages that come from internal domains.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-IPBlockListConfig -InternalMailEnabled $true
```

This example configures connection filtering to use the IP Block list on messages that come from internal connections.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-IPBlockListConfig -InternalMailEnabled $true
```

This example configures connection filtering to use the IP Block list on messages that come from internal connections.

## PARAMETERS

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

The Enabled parameter specifies whether the IP Block list is used for content filtering on the computer on which you're running the command. Valid input for the Enabled parameter is $true or $false. The default setting is $true. When the Enabled parameter is set to $true, the IP Block list is used for content filtering on the computer on which you're running the command.



!!! Exchange Server 2013, Exchange Server 2016

The Enabled parameter specifies whether the IP Block list is used for content filtering. Valid input for this parameter is $true or $false. The default value is $true. By default, the IP Block list is used for content filtering.



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

The ExternalMailEnabled parameter specifies whether the IP Block list is used for content filtering for all messages from connections external to the Exchange organization. Valid input for the ExternalMailEnabled parameter is $true or $false. The default setting is $true. When the ExternalMailEnabled parameter is set to $true, the IP Block list is used for content filtering for all messages from connections external to the Exchange organization.



!!! Exchange Server 2013, Exchange Server 2016

The ExternalMailEnabled parameter specifies whether messages from connections outside of the Exchange organization are evaluated by the IP Block list. Valid input for this parameter is $true or $false. The default value is $true. By default, messages from external connections are evaluated by the IP Block list.



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

The InternalMailEnabled parameter specifies whether the IP Block list is used for content filtering for all messages from senders internal to the Exchange organization. Valid input for the InternalMailEnabled parameter is $true or $false. The default setting is $false. When the InternalMailEnabled parameter is set to $true, the IP Block list is used for content filtering for all messages from senders internal to the Exchange organization. Authenticated partner messages aren't considered internal mail.



!!! Exchange Server 2013, Exchange Server 2016

The InternalMailEnabled parameter specifies whether messages from connections inside the Exchange organization are evaluated by the IP Block list. Valid input for this parameter is $true or $false. The default value is $false. By default, messages from internal connections are not evaluated by the IP Block list. Authenticated partner messages aren't considered internal mail.



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

### -MachineEntryRejectionResponse
!!! Exchange Server 2010

The MachineEntryRejectionResponse parameter specifies customized responses for messages received from IP addresses that were added to the IP Block list by sender reputation.

Enter the message body that you want delivered in the non-delivery report (NDR) to senders. Don't exceed 240 characters in the argument. When you pass an argument, you must enclose the MachineEntryRejectionResponse parameter in quotation marks (") if the phrase contains spaces, for example: "Message rejected".



!!! Exchange Server 2013, Exchange Server 2016

The MachineEntryRejectionResponse parameter specifies customized text in the non-delivery report (NDR) for messages that are blocked by connection filtering due to IP addresses in the IP Block list that were added by sender reputation. The value can't exceed 240 characters. If the value contains spaces, enclose the value in double quotation marks (").



```yaml
Type: AsciiString
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StaticEntryRejectionResponse
!!! Exchange Server 2010

The StaticEntryRejectionResponse parameter specifies a customized response for messages blocked by the IP Block list on the Connection Filter agent. Don't exceed 240 characters in the argument. When you pass an argument, you must enclose the StaticEntryRejectionResponse parameter in quotation marks (") if the phrase contains spaces, for example: "Message rejected".



!!! Exchange Server 2013, Exchange Server 2016

The StaticEntryRejectionResponse parameter specifies a customized text in the NDR for messages that are blocked by connection filtering due to IP addresses in the IP Block list. The value can't exceed 240 characters. If the value contains spaces, enclose the value in double quotation marks (").



```yaml
Type: AsciiString
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

[Online Version](https://technet.microsoft.com/library/87e30029-0349-4d9a-a9a4-cb25686ccb7c.aspx)

