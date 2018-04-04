---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Set-RpcClientAccess
schema: 2.0.0
---

# Set-RpcClientAccess

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-RpcClientAccess cmdlet to modify the settings of the Microsoft Exchange RPC Client Access service on Exchange servers that have the Client Access server role installed. These settings affect Outlook clients that connect by using Outlook Anywhere (RPC over HTTP).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-RpcClientAccess -Server <ServerIdParameter> [-BlockedClientVersions <String>] [-Confirm]
 [-DomainController <Fqdn>] [-EncryptionRequired <$true | $false>] [-MaximumConnections <Int32>]
 [-Name <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Outlook 2007 isn't supported in Exchange 2016, so you shouldn't see Outlook connections at or below version 12.Y.Z. However, you should monitor the RPC Client Access log to see the client versions that are connecting to your Exchange servers before you block any client versions.

To block Outlook versions for specific mailboxes, use the Set-CASMailbox cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Set-RpcClientAccess -Server MBX01 -BlockedClientVersions 14.0.0-14.32767.65535
```

This example prevents Outlook Anywhere connections by Outlook 2010 clients on the server named MBX01.

### Example 2
```
Set-RpcClientAccess -Server MBX01 -BlockedClientVersions 15.0.0-15.4737.999
```

This example prevents Outlook Anywhere connections by Outlook 2013 clients that don't have KB3054940 installed (version 15.0.4737.1000) on the server named MBX01.

Note: You can determine specific client software versions by parsing the RPC Client Access log files located at %ExchangeInstallPath%Logging\\RPC Client Access.

## PARAMETERS

### -Server
The Server parameter specifies the Exchange server that you want to modify.

You can use any value that uniquely identifies the server. For example:

- Name (for example, Exchange01)

- Distinguished name (DN) (for example, CN=Exchange01,CN=Servers,CN=Exchange Administrative Group (FYDIBOHF23SPDLT),CN=Administrative Groups,CN=First Organization,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com)

- Exchange Legacy DN (for example, /o=First Organization/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Configuration/cn=Servers/cn=Exchange01)

- GUID (for example, bc014a0d-1509-4ecc-b569-f077eec54942)

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BlockedClientVersions
The BlockedClientVersions parameter specifies the RPC client versions that aren't allowed to connect to the specified Exchange server. For example, the Microsoft Exchange RPC Client Access service rejects an Outlook Anywhere connection if the version of Outlook is the specified value, or is in the specified range.

Valid version values are in the format X.Y.Z. RPC client versions are typically reported in format X.0.Y.Z format, but for this parameter, you need to specify the value as X.Y.Z.

- X is the major version number. For example, Outlook 2016 is 16, Outlook 2013 is 15, and Outlook 2010 is 14.

- Y is the minor revision number, and must be less than or equal to 32767.

- Z is the build number, and must be less than or equal to 65535.

You can specify ranges. For example, -13.32767.65535, 14.0.0-14.32767.65535, or 15.0.0-.

You can specify multiple individual values or range values separated by semicolons (;).

Be careful when you restrict client access, because Exchange server components might also use RPC to log on. Some components may report their client version as a text string, while others may report the Exchange build number. Monitor the RPC Client Access log to see the client versions that are connecting to your Exchange server before you block any client versions.

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

### -EncryptionRequired
The EncryptionRequired parameter specifies whether encryption is required for RPC client connections. Valid values are:

- $true: Unencrypted RPC client connections are rejected. This is the default value.

- $false: Unencrypted RPC client connections are allowed.

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

### -MaximumConnections
The MaximumConnections parameter specifies the maximum number of concurrent client connections that are allowed by the Microsoft Exchange RPC Client Access service. The default value is 65536.

Note: Although you can configure a non-default value for this parameter, changes to this setting aren't enforced.

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

### -Name
The Name parameter specifies the name of the configuration object in Active Directory. By default, this parameter is set to RpcClientAccess.

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

[Online Version](https://technet.microsoft.com/library/b606d241-aecd-4bb9-a34f-6dd6b02a712c.aspx)
