---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Set-SenderReputationConfig

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-SenderReputationConfig cmdlet to modify the sender reputation configuration on a computer that has the Edge Transport server role or the Hub Transport server role installed.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Set-SenderReputationConfig cmdlet to modify the sender reputation configuration on a Mailbox server or an Edge Transport server.

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Set-SenderReputationConfig cmdlet to modify the sender reputation configuration on Mailbox servers or Edge Transport servers.

## SYNTAX

```
Set-SenderReputationConfig [-Confirm] [-DomainController <Fqdn>] [-Enabled <$true | $false>]
 [-ExternalMailEnabled <$true | $false>] [-InternalMailEnabled <$true | $false>]
 [-OpenProxyDetectionEnabled <$true | $false>] [-ProxyServerName <String>] [-ProxyServerPort <Int32>]
 [-ProxyServerType <None | Socks4 | Socks5 | HttpConnect | HttpPost | Telnet | Cisco | Wingate>]
 [-SenderBlockingEnabled <$true | $false>] [-SenderBlockingPeriod <Int32>] [-SrlBlockThreshold <Int32>]
 [-WhatIf] [<CommonParameters>]
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
Set-SenderReputationConfig -SenderBlockingEnabled $true -SrlBlockThreshold 6 -SenderBlockingPeriod 36
```

This example makes the following modifications to the sender reputation configuration:


It sets the sender reputation action to block all senders whose sender reputation level (SRL) rating exceeds the SRL threshold.

It sets the SRL blocking threshold to 6.

It sets the number of hours that senders are put on the blocked senders list to 36 hours.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-SenderReputationConfig -SenderBlockingEnabled $true -SrlBlockThreshold 6 -SenderBlockingPeriod 36
```

This example makes the following modifications to the sender reputation configuration:


It sets the sender reputation action to block all senders whose sender reputation level (SRL) rating exceeds the SRL threshold.

It sets the SRL blocking threshold to 6.

It sets the number of hours that senders are put on the blocked senders list to 36 hours.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-SenderReputationConfig -SrlBlockThreshold 6 -SenderBlockingPeriod 36
```

This example makes the following modifications to the sender reputation configuration:


It sets the SRL blocking threshold to 6.

It sets the number of hours that senders are put on the blocked senders list to 36 hours.

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

The Enabled parameter specifies whether sender reputation is enabled on the computer on which you're running the command. Valid input for the Enabled parameter is $true or $false. The default setting is $true. When the Enabled parameter is set to $true, sender reputation is enabled on the computer on which you're running the command.



!!! Exchange Server 2013

The Enabled parameter enables or disables sender reputation on your Exchange server. Valid input for this parameter is $true or $false. The default value is $true.



!!! Exchange Server 2016

The Enabled parameter enables or disables sender reputation on the Exchange server. Valid values are:

- $true: Sender reputation is enabled. This is the default value.

- $false: Sender reputation is disabled.



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

The ExternalMailEnabled parameter specifies whether all messages from unauthenticated connections external to the Exchange organization are passed through sender reputation for processing. Valid input for the ExternalMailEnabled parameter is $true or $false. The default setting is $true. When the ExternalMailEnabled parameter is set to $true, all messages from unauthenticated connections external to the Exchange organization are passed through sender reputation for processing.



!!! Exchange Server 2013

The ExternalMailEnabled parameter allows or prevents sender reputation from processing all messages from unauthenticated connections that are external to your Exchange organization. Valid input for this parameter is $true or $false. The default value is $true.



!!! Exchange Server 2016

The ExternalMailEnabled parameter allows or prevents sender reputation from processing messages from unauthenticated connections that are external to your Exchange organization. Valid values are:

- $true: Sender reputation is enabled on mail from external sources. This is the default value.

- $false: Sender reputation is disabled on mail from external sources.



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

The InternalMailEnabled parameter specifies whether all messages from authenticated sender domains that belong to authoritative domains in your enterprise are passed through sender reputation for processing. Valid input for the InternalMailEnabled parameter is $true or $false. The default setting is $false. When the InternalMailEnabled parameter is set to $true, all messages from authenticated sender domains that belong to authoritative domains in your enterprise are passed through sender reputation for processing.



!!! Exchange Server 2013

The InternalMailEnabled parameter allows or prevents sender reputation from processing all messages from authenticated sender domains that are authoritative domains in your Exchange organization. Valid input for this parameter is $true or $false. The default value is $false.



!!! Exchange Server 2016

The InternalMailEnabled parameter allows or prevents sender reputation from processing messages from authenticated sender domains that are authoritative domains in your Exchange organization. Valid values are:

- $true: Sender reputation is enabled on mail from internal sources.

- $false: Sender reputation is disabled on mail from internal sources. This is the default value.



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

### -OpenProxyDetectionEnabled
!!! Exchange Server 2010

The OpenProxyDetectionEnabled parameter specifies whether sender reputation tries to determine whether the sender's address is an open proxy by connecting to the originating IP address. Valid input for the OpenProxyDetectionEnabled parameter is $true or $false. The default setting is $true. When the OpenProxyDetectionEnabled parameter is set to $true, sender reputation tries to determine whether the sender's address is an open proxy by connecting to the originating IP address.



!!! Exchange Server 2013

The OpenProxyDetectionEnabled parameter allows or prevents sender reputation from connecting to the source IP address to determine if the sender is an open proxy. Valid input for this parameter is $true or $false. The default value is $true.

The values of the OpenProxyDetectionEnabled and SenderBlockingEnabled parameters can both be set to $true, but they both can't be set to $false. If one value is $true and the other is $false, and you change the $true value to $false, the parameter that was previously $false will automatically change to $true.



!!! Exchange Server 2016

The OpenProxyDetectionEnabled parameter allows or prevents sender reputation from attempting to connect to the message's source IP address to send a test message back to the Exchange server. This test determines if the sender is an open proxy server. Valid values are:

- $true: Open proxy server detection is enabled. This is the default value.

- $false: Open proxy server detection is disabled.

Open proxy server detection requires the following open outbound TCP ports in your firewall: 23, 80, 1080, 1081, 3128, and 6588.

If your organization uses a proxy server for outbound Internet access, you also need to define the properties of the proxy server by using the ProxyServerName, ProxyServerPort, and ProxyServerType parameters.

The values of the OpenProxyDetectionEnabled and SenderBlockingEnabled parameters can both be set to $true, but they both can't be set to $false. If one value is $true and the other is $false, and you change the $true value to $false, the parameter that was previously $false will automatically change to $true.



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

### -ProxyServerName
!!! Exchange Server 2010, Exchange Server 2013

The ProxyServerName parameter specifies the name of your organization's proxy server. Sender reputation uses this parameter to connect to the Internet.



!!! Exchange Server 2016

The ProxyServerName parameter specifies the nameor IP address of your organization's proxy server. Sender reputation uses this value to connect to the Internet for open proxy server detection.

The default value is blank ($null). To clear this value, use the value $null.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyServerPort
!!! Exchange Server 2010

The ProxyServerPort parameter specifies the port number for your organization's proxy server. Sender reputation uses this parameter to connect to the Internet.



!!! Exchange Server 2013

The ProxyServerPort parameter specifies the port number that's used by your organization's proxy server. Sender reputation uses this parameter to connect to the Internet.



!!! Exchange Server 2016

The ProxyServerPort parameter specifies the port number that's used by your organization's proxy server. Sender reputation uses this value to connect to the Internet for open proxy server detection.

The default value is 0.



```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyServerType
!!! Exchange Server 2010

The ProxyServerType parameter specifies the type of proxy server that your organization runs. Valid input for the ProxyServerType parameter is None, Socks4, Socks5, HttpConnect, HttpPost, Telnet, Cisco, or Wingate. Sender reputation uses this parameter to connect to the Internet. The default setting is None.



!!! Exchange Server 2013

The ProxyServerType parameter classifies your organization's proxy server. Sender reputation uses this parameter to connect to the Internet.

Valid input for this parameter is None, Socks4, Socks5, HttpConnect, HttpPost, Telnet, Cisco, or Wingate. The default value is None.



!!! Exchange Server 2016

The ProxyServerType parameter specifiesthe type of your organization's proxy server. Sender reputation uses this value to connect to the Internet for open proxy server detection. Valid values are:

- None: This is the default value.

- Cisco

- HttpConnect

- HttpPost

- Socks4

- Socks5

- Telnet

- Wingate



```yaml
Type: None | Socks4 | Socks5 | HttpConnect | HttpPost | Telnet | Cisco | Wingate
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderBlockingEnabled
!!! Exchange Server 2010

The SenderBlockingEnabled parameter specifies whether sender reputation blocks senders whose sending system fails an open proxy test. Valid input for the SenderBlockingEnabled parameter is $true or $false. The default setting is $true. When the SenderBlockingEnabled parameter is set to $true, sender reputation blocks senders whose sending system fails an open proxy test. If you enable the SenderBlockingEnabled parameter, you must also enable the OpenProxyDetectionEnabled parameter. You can block senders for a configurable number of hours by using the SenderBlockingPeriod parameter.



!!! Exchange Server 2013

The SenderBlockingEnabled parameter allows or prevents sender reputation from blocking senders when the source server fails an open proxy test. Valid input for this parameter is $true or $false. The default value is $true.

You can temporarily block senders for up to 48 hours when you use the SenderBlockingPeriod parameter.

The values of the OpenProxyDetectionEnabled and SenderBlockingEnabled parameters can both be set to $true, but they both can't be set to $false. If one value is $true and the other is $false, and you change the $true value to $false, the parameter that was previously $false will automatically change to $true.



!!! Exchange Server 2016

The SenderBlockingEnabled parameter allows or prevents sender reputation from blocking senders when theirsender reputation level (SRL) meets or exceeds the value of the SrlBlockThreshold parameter. Valid values are:

- $true: Sender blocking is enabled. This is the default value.

- $false: Sender blocking is disabled.

You can temporarily block senders for up to 48 hours when you use the SenderBlockingPeriod parameter.

The values of the OpenProxyDetectionEnabled and SenderBlockingEnabled parameters can both be set to $true, but they both can't be set to $false. If one value is $true and the other is $false, and you change the $true value to $false, the parameter that was previously $false will automatically change to $true.



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

### -SenderBlockingPeriod
!!! Exchange Server 2010

The SenderBlockingPeriod parameter specifies the number of hours that senders whose originating IP address fails the open proxy test will be put on the blocked senders list. The default value is 24. You must enter an integer from 0 through 48.



!!! Exchange Server 2013

The SenderBlockingPeriod parameter specifies the number of hours that a sender remains on the blocked senders list when their source IP address fails the open proxy test. Valid input for this parameter is an integer from 0 through 48. The default value is 24.



!!! Exchange Server 2016

The SenderBlockingPeriod parameter specifies the number of hours that a sender remains on the blocked senders list when their SRL meets or exceeds the value of the SrlBlockThreshold parameter. Valid input for this parameter is an integer from 0 through 48. The default value is 24.



```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SrlBlockThreshold
!!! Exchange Server 2010

The SrlBlockThreshold parameter takes an integer value from 0 through 9. This value represents the sender reputation level (SRL) rating that sender reputation applies to the message. The default setting is 9.



!!! Exchange Server 2013

The SrlBlockThreshold specifies the sender reputation level (SRL) rating that must be exceeded for sender reputation to block a sender. Valid input for this parameter is an integer value from 0 through 9. The default value is 7.



!!! Exchange Server 2016

The SrlBlockThreshold specifies the SRL rating that must be met or exceeded for sender reputation to block a sender. Valid input for this parameter is an integer from 0 through 9. The default value is 7.

Messages are blocked only when the SenderBlockingEnabled parameter is set to $true.



```yaml
Type: Int32
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

[Online Version](https://technet.microsoft.com/library/e4e95705-01a2-43a2-9dd8-3da9014cc489.aspx)

