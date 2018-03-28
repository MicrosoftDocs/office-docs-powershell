---
applicable: Exchange Server 2010
schema: 2.0.0
---

# New-RpcClientAccess

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the New-RpcClientAccess cmdlet to create configuration information for the Exchange RPC Client Access service on a Client Access server. This setup task is performed by default on new installations of the Client Access server role on Microsoft Exchange Server 2010.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-RpcClientAccess -Server <ServerIdParameter> [-BlockedClientVersions <String>] [-Confirm]
 [-DomainController <Fqdn>] [-EncryptionRequired <$true | $false>] [-MaximumConnections <Int32>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
After you run this command, you must start the Exchange RPC Client Access service on the Exchange Client Access server to enable RPC client access.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
New-RpcClientAccess -Server CAS01
```

This example creates configuration information for the Exchange RPC Client Access service on the Client Access server CAS01. After you run this command, you must start the Exchange RPC Client Access service on the Exchange Client Access server to enable RPC client access.

## PARAMETERS

### -Server
The Server parameter specifies the Client Access server.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BlockedClientVersions
The BlockedClientVersions parameter specifies which versions of Microsoft Outlook are restricted from connecting. The Exchange RPC Client Access service rejects Outlook connections if versions are in the range specified. This setting affects MAPI and Outlook Anywhere client connections. The value must be less than 256 characters in length.

Versions should be single numbers in the format X.Y.Z where X is a major version number, Y is the minor revision number, and Z specifies the build, and ranges should be delimited by semicolons (for example, 0.0.0-5.9.9; 7.0.0-65535.65535.65535).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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
Applicable: Exchange Server 2010

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
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptionRequired
The EncryptionRequired parameter specifies whether to require Outlook connections to be encrypted. The Exchange RPC Client Access service rejects unencrypted Outlook connections if this parameter is set to $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumConnections
The MaximumConnections parameter specifies the maximum number of concurrent connections allowed. The Exchange RPC Client Access service reads and limits connections based on this property.

This parameter has a range from 1 through 65535.

Although you can configure a non-default value for this parameter, changes to this setting aren't enforced in this version of Exchange.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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
Applicable: Exchange Server 2010

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

[Online Version](https://technet.microsoft.com/library/c235645b-3361-404d-bf0d-3d8920aeb4e4.aspx)

