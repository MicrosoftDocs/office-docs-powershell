---
applicable: Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# New-PowerShellVirtualDirectory

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the New-PowerShellVirtualDirectory cmdlet to create Windows PowerShell virtual directories that are used in Internet Information Services (IIS) on Microsoft Exchange servers.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-PowerShellVirtualDirectory [-Name] <String> [-BasicAuthentication <$true | $false>] [-Confirm]
 [-DomainController <Fqdn>] [-ExternalUrl <Uri>] [-InternalUrl <Uri>] [-RequireSSL <$true | $false>]
 [-Role <ClientAccess | Mailbox>] [-Server <ServerIdParameter>] [-WhatIf]
 [-WindowsAuthentication <$true | $false>] [<CommonParameters>]
```

## DESCRIPTION
Although it's possible to create a Windows PowerShell virtual directory, we recommend that you only do so at the request of Microsoft Customer Service and Support.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
New-PowerShellVirtualDirectory -Name "Contoso Certificates Required" -BasicAuthentication $false -WindowsAuthentication $false -CertificateAuthentication $true
```

This example creates a Windows PowerShell virtual directory and configures it to accept only certificate authentication.

## PARAMETERS

### -Name
The Name parameter specifies the name of the new PowerShell virtual directory. The name you provide will have the name of the website it's created under appended to it. If the name you provide contains spaces, enclose the name in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BasicAuthentication
The BasicAuthentication parameter specifies whether Basic authentication is enabled on the PowerShell virtual directory. The valid values are $true and $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalUrl
The ExternalUrl parameter specifies the external URL that the PowerShell virtual directory points to.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalUrl
The InternalUrl parameter specifies the internal URL that the PowerShell virtual directory points to.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireSSL
The RequireSSL parameter specifies whether the PowerShell virtual directory should require that the client connection be made using Secure Sockets Layer (SSL). The valid values are $true and $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Role
The Role parameter species the configuration for the virtual directory. Valid values are:

- ClientAccess: Configure the virtual directory for the Client Access (frontend) services on the Mailbox server.

- Mailbox: Configure the virtual directory for the backend services on the Mailbox server.

Client connections are proxied from the Client Access services to the backend services on local or remote Mailbox servers. Clients don't connect directly to the backend services.

```yaml
Type: ClientAccess | Mailbox
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
The Server parameter specifies the Exchange server that hosts the virtual directory. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- ExchangeLegacyDN

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WindowsAuthentication
The WindowsAuthentication parameter specifies whether Integrated Windows authentication is enabled on the PowerShell virtual directory. The valid values are $true and $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/0310d606-eb30-45b0-ae4b-14fa9ab19cc0.aspx)
