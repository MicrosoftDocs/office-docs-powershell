---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/new-edgesubscription
schema: 2.0.0
title: New-EdgeSubscription
---

# New-EdgeSubscription

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the New-EdgeSubscription cmdlet to export an Edge Subscription file from an Edge Transport server and to import the Edge Subscription file to a Mailbox server.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-EdgeSubscription [-AccountExpiryDuration <TimeSpan>]
 [-Confirm]
 [-CreateInboundSendConnector <Boolean>]
 [-CreateInternetSendConnector <Boolean>]
 [-DomainController <Fqdn>]
 [-FileData <Byte[]>]
 [-FileName <LongPath>]
 [-Force]
 [-Site <AdSiteIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Edge Transport server doesn't have access to Active Directory. All configuration and recipient information is stored in the Active Directory Lightweight Directory Services (AD LDS) instance. The New-EdgeSubscription cmdlet creates the Edge Subscription file that will be imported on a Mailbox server in the Active Directory site to which you want to subscribe this Edge Transport server.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-EdgeSubscription -FileName "C:\Data\EdgeSubscription.xml"
```

This example creates the Edge Subscription file. It should be run on your Edge Transport server.

### Example 2
```powershell
$Temp = [System.IO.File]::ReadAllBytes('C:\Data\EdgeSubscription.xml')

New-EdgeSubscription -FileData $Temp -Site "Default-First-Site-Name"
```

This example imports the Edge Subscription file generated in Example 1 to the Active Directory site Default-First-Site-Name. Importing the Edge Subscription file completes the Edge Subscription process. You must run this command on the Mailbox server.

The first command reads the data from the Edge Subscription file and stores it in a temporary variable as a byte-encoded data object. The second command completes the Edge subscription process.

### Example 3
```powershell
New-EdgeSubscription -FileData ([System.IO.File]::ReadAllBytes('C:\Data\EdgeSubscription.xml')) -Site "Default-First-Site-Name"
```

This example also imports the Edge Subscription file generated in Example 1 to the Active Directory site Default-First-Site-Name; however, the end result is accomplished using one command. You must run this command on the Mailbox server.

## PARAMETERS

### -AccountExpiryDuration

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AccountExpiryDuration parameter specifies how soon the EdgeSync bootstrap replication account (ESBRA) created by this command will expire.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes and ss = seconds.

The value for this parameter must be a minimum of 00:02:00 or 2 minutes. The default value is 24:00:00 or 24 hours.

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CreateInboundSendConnector

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The CreateInboundSendConnector parameter specifies whether to create the Send connector to connect the Edge Transport server and the Hub Transport servers. The default value is $true. The Send connector address space is set to "--", the smart hosts are set to "--", the Edge Transport server is set as the source server and Domain Name System (DNS) routing is disabled. This parameter is only used when you run the command on the Hub Transport server.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CreateInternetSendConnector

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The CreateInternetSendConnector parameter specifies whether to create the Send connector to connect to the Internet. The default value is $true. The Send connector address space is set to all domains (\*), the Edge Transport server is set as the source server, and DNS routing is enabled. This parameter is only used when you run the command on the Hub Transport server.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileData

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The FileData parameter specifies the byte-encoded data object that contains the Edge Subscription file information.

A valid value for this parameter requires you to read the file to a byte-encoded object using the following syntax: `([System.IO.File]::ReadAllBytes('<Path>\<FileName>'))`. You can use this command as the parameter value, or you can write the output to a variable (`$data = [System.IO.File]::ReadAllBytes('<Path>\<FileName>')`) and use the variable as the parameter value (`$data`).

You can only use this parameter when you're running the command on a Mailbox server.

```yaml
Type: Byte[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The FileName parameter specifies the full path of the Edge Subscription file.

You can only use this parameter when you're running this command on an Edge Transport server.

```yaml
Type: LongPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

This switch is useful in the following scenarios:

- Bypassing confirmation when you script the Edge Subscription command.
- Recreating an Edge Transport server subscription and overwriting the existing configuration information.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Site

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Site parameter specifies the name of the Active Directory site that contains the Mailbox servers with which the Edge Transport servers are associated. This parameter is used and required only when you run the command on a Mailbox server.

```yaml
Type: AdSiteIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
