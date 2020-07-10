---
external help file: Microsoft.Exchange.TransportMailControl-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-senderreputationconfig
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Set-SenderReputationConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Set-SenderReputationConfig

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-SenderReputationConfig cmdlet to modify the sender reputation configuration on Mailbox servers or Edge Transport servers.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-SenderReputationConfig [-Confirm] [-DomainController <Fqdn>] [-Enabled <Boolean>]
 [-ExternalMailEnabled <Boolean>] [-InternalMailEnabled <Boolean>]
 [-OpenProxyDetectionEnabled <Boolean>] [-ProxyServerName <String>] [-ProxyServerPort <Int32>]
 [-ProxyServerType <ProxyType>]
 [-SenderBlockingEnabled <Boolean>] [-SenderBlockingPeriod <Int32>] [-SrlBlockThreshold <Int32>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
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
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
The Enabled parameter enables or disables sender reputation on the Exchange server. Valid values are:

- $true: Sender reputation is enabled. This is the default value.

- $false: Sender reputation is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalMailEnabled
The ExternalMailEnabled parameter allows or prevents sender reputation from processing messages from unauthenticated connections that are external to your Exchange organization. Valid values are:

- $true: Sender reputation is enabled on mail from external sources. This is the default value.

- $false: Sender reputation is disabled on mail from external sources.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalMailEnabled
The InternalMailEnabled parameter allows or prevents sender reputation from processing messages from authenticated sender domains that are authoritative domains in your Exchange organization. Valid values are:

- $true: Sender reputation is enabled on mail from internal sources.

- $false: Sender reputation is disabled on mail from internal sources. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OpenProxyDetectionEnabled
The OpenProxyDetectionEnabled parameter allows or prevents sender reputation from attempting to connect to the message's source IP address to send a test message back to the Exchange server. This test determines if the sender is an open proxy server. Valid values are:

- $true: Open proxy server detection is enabled. This is the default value.

- $false: Open proxy server detection is disabled.

Open proxy server detection requires the following open outbound TCP ports in your firewall: 23, 80, 1080, 1081, 3128, and 6588.

If your organization uses a proxy server for outbound Internet access, you also need to define the properties of the proxy server by using the ProxyServerName, ProxyServerPort, and ProxyServerType parameters.

The values of the OpenProxyDetectionEnabled and SenderBlockingEnabled parameters can both be set to $true, but they both can't be set to $false. If one value is $true and the other is $false, and you change the $true value to $false, the parameter that was previously $false will automatically change to $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyServerName
The ProxyServerName parameter specifies the name or IP address of your organization's proxy server. Sender reputation uses this value to connect to the Internet for open proxy server detection.

The default value is blank ($null). To clear this value, use the value $null.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyServerPort
The ProxyServerPort parameter specifies the port number that's used by your organization's proxy server. Sender reputation uses this value to connect to the Internet for open proxy server detection.

The default value is 0.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyServerType
The ProxyServerType parameter specifies the type of your organization's proxy server. Sender reputation uses this value to connect to the Internet for open proxy server detection. Valid values are:

- None: This is the default value.

- Cisco

- HttpConnect

- HttpPost

- Socks4

- Socks5

- Telnet

- Wingate

```yaml
Type: ProxyType
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderBlockingEnabled
The SenderBlockingEnabled parameter allows or prevents sender reputation from blocking senders when their sender reputation level (SRL) meets or exceeds the value of the SrlBlockThreshold parameter. Valid values are:

- $true: Sender blocking is enabled. This is the default value.

- $false: Sender blocking is disabled.

You can temporarily block senders for up to 48 hours when you use the SenderBlockingPeriod parameter.

The values of the OpenProxyDetectionEnabled and SenderBlockingEnabled parameters can both be set to $true, but they both can't be set to $false. If one value is $true and the other is $false, and you change the $true value to $false, the parameter that was previously $false will automatically change to $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderBlockingPeriod
The SenderBlockingPeriod parameter specifies the number of hours that a sender remains on the blocked senders list when their SRL meets or exceeds the value of the SrlBlockThreshold parameter. Valid input for this parameter is an integer from 0 through 48. The default value is 24.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SrlBlockThreshold
The SrlBlockThreshold specifies the SRL rating that must be met or exceeded for sender reputation to block a sender. Valid input for this parameter is an integer from 0 through 9. The default value is 7.

Messages are blocked only when the SenderBlockingEnabled parameter is set to $true.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
