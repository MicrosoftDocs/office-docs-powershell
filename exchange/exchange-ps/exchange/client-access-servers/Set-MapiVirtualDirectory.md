---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016
title: Set-MapiVirtualDirectory
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016"
---

# Set-MapiVirtualDirectory

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-MapiVirtualDirectory cmdlet to modify Messaging Application Programming Interface (MAPI) virtual directories that are used in Internet Information Services (IIS) on Microsoft Exchange servers. A MAPI virtual directory is used by supported versions of Microsoft Outlook to connect to mailboxes by using the MAPIHTTP protocol.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-MapiVirtualDirectory [-Identity] <VirtualDirectoryIdParameter> [-ApplyDefaults <$true | $false>] [-Confirm]
 [-DomainController <Fqdn>] [-ExternalUrl <Uri>] [-IISAuthenticationMethods <MultiValuedProperty>] [-InternalUrl <Uri>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-MapiVirtualDirectory -Identity "ContosoMail\mapi (Default Web Site)" -InternalUrl https://contoso.com/mapi -IISAuthenticationMethods NTLM,Negotiate,OAuth
```

This example makes the following configuration changes to the MAPI virtual directory on the default web site of the server named ContosoMail:

- Internal URL: https://contoso/mapi.

- IIS authentication methods: NTLM, Negotiate, and OAuth.

## PARAMETERS

### -Identity
The Identity parameter specifies the MAPI virtual directory that you want to configure.

You can use any value that uniquely identifies the virtual directory. For example:

- Name or \<Server\>\\Name

- Distinguished name (DN)

- GUID

The Name value uses the syntax "\<VirtualDirectoryName\> (\<WebsiteName\>)" from the properties of the virtual directory. You can specify the wildcard character (\*) instead of the default website by using the syntax \<VirtualDirectoryName\>\*.

```yaml
Type: VirtualDirectoryIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ApplyDefaults
The ApplyDefaults switch specifies whether to apply the correct defaults to the related internal IIS application settings. Typically, this switch is used only by Exchange setup during the installation of Exchange Cumulative Updates or Service Packs and you shouldn't need to use it.

This switch doesn't affect the values you configure by using the IISAuthenticationMethods, InternalUrl or ExternalUrl parameters.

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
Aliases: cf
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
The ExternalURL parameter specifies the URL that's used to connect to the virtual directory from outside the firewall.

This setting enforces the Secure Sockets Layer (SSL) protocol and uses the default SSL port. Valid input for this parameter uses the syntax https://\<Domain Name\>/mapi.

When you use the InternalUrl or ExternalUrl parameters, you need to specify one or more authentication values by using the IISAuthenticationMethods parameter.

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

### -IISAuthenticationMethods
The IISAuthenticationMethods parameter specifies the authentication methods that are enabled on the virtual directory in Internet Information Services (IIS). Valid values are:

- Basic

- Negotiate

- NTLM

- OAuth

You can specify multiple values separated by commas.

The default values are NTLM, OAuth, and Negotiate. We recommend that you always have the virtual directory configured for OAuth.

```yaml
Type: MultiValuedProperty
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
The InternalURL parameter specifies the URL that's used to connect to the virtual directory from inside the firewall.

This setting enforces the Secure Sockets Layer (SSL) protocol and uses the default SSL port. Valid input for this parameter uses the syntax https://\<Domain Name\>/mapi.

When you use the InternalUrl or ExternalUrl parameters, you need to specify one or more authentication values by using the IISAuthenticationMethods parameter.

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

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/c9308fe6-3b61-4d99-a5f2-ef47abbc7656.aspx)
