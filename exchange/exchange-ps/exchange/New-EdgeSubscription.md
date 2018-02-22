---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# New-EdgeSubscription

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the New-EdgeSubscription cmdlet to export an Edge Subscription file from an Edge Transport server and to import the Edge Subscription file to a Mailbox server.

## SYNTAX

```
New-EdgeSubscription [-AccountExpiryDuration <TimeSpan>] [-Confirm]
 [-CreateInboundSendConnector <$true | $false>] [-CreateInternetSendConnector <$true | $false>]
 [-DomainController <Fqdn>] [-FileData <Byte[]>] [-FileName <LongPath>] [-Force] [-Site <AdSiteIdParameter>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Edge Transport server doesn't have access to Active Directory. All configuration and recipient information is stored in the Active Directory Lightweight Directory Services (AD LDS) instance. The New-EdgeSubscription cmdlet creates the Edge Subscription file that will be imported on a Mailbox server in the Active Directory site to which you want to subscribe this Edge Transport server..

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
New-EdgeSubscription -FileName "c:\EdgeServerSubscription.xml"
```

This example creates the Edge Subscription file. It should be run on your Edge Transport server.

### Example 2
```
[byte[]]$Temp = Get-Content -Path "C:\EdgeServerSubscription.xml" -Encoding Byte -ReadCount 0; New-EdgeSubscription -FileData $Temp -Site "Default-First-Site-Name"
```

This example imports the Edge Subscription file generated in Example 1 to the Active Directory site Default-First-Site-Name. Importing the Edge Subscription file completes the Edge Subscription process. You must run this command on the Mailbox server.

The first command reads the data from the Edge Subscription file and stores it in a temporary variable as a byte-encoded data object. The second command completes the Edge subscription process.

### Example 3
```
New-EdgeSubscription -FileData ([byte[]]$(Get-Content -Path "C:\EdgeServerSubscription.xml" -Encoding Byte -ReadCount 0)) -Site "Default-First-Site-Name"
```

This example also imports the Edge Subscription file generated in Example 1 to the Active Directory site Default-First-Site-Name; however, the end result is accomplished using one command. You must run this command on the Mailbox server.

## PARAMETERS

### -AccountExpiryDuration
The AccountExpiryDuration parameter specifies how soon the bootstrap account created by this command will expire.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes and ss = seconds.

The value for this parameter must be a minimum of 00:02:00 or 2 minutes.

```yaml
Type: TimeSpan
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

### -CreateInboundSendConnector
The CreateInboundSendConnector parameter specifies whether to create the Send connector to connect the Edge Transport server and the Hub Transport servers. The default value is $true. The Send connector address space is set to "--", the smart hosts are set to "--", the Edge Transport server is set as the source server and Domain Name System (DNS) routing is disabled. This parameter is only used when you run the command on the Hub Transport server.

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

### -CreateInternetSendConnector
The CreateInternetSendConnector parameter specifies whether to create the Send connector to connect to the Internet. The default value is $true. The Send connector address space is set to all domains (\*), the Edge Transport server is set as the source server, and DNS routing is enabled. This parameter is only used when you run the command on the Hub Transport server.

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

### -FileData
The FileData parameter specifies the byte-encoded data object that contains the Edge Subscription file information.

A valid value for this parameter requires you to read the file to a byte-encoded object using the Get-Content cmdlet. For example, ([Byte[]](Get-Content -Encoding Byte -Path "C:\\My Documents\\\<filename\>" -ReadCount 0)).

You can only use this parameter when you're running this command on a Mailbox server.

```yaml
Type: Byte[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileName
The FileName parameter specifies the full path of the Edge Subscription file.

You can only use this parameter when you're running this command on an Edge Transport server.

```yaml
Type: LongPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

This switch is useful when you use a script with the Edge Subscription command because it bypasses confirmation. Another scenario in which this switch is useful is when you have to subscribe an Edge Transport server again and you want to overwrite the existing configuration information.

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

### -Site
The Site parameter specifies the name of the Active Directory site that contains the Mailbox servers with which the Edge Transport servers are associated. This parameter is used and required only when you run the command on a Mailbox server.

```yaml
Type: AdSiteIdParameter
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

[Online Version](https://technet.microsoft.com/library/94c4a829-0ef4-4623-aeb9-b362f66f4a71.aspx)
