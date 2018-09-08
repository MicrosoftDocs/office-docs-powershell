---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016
title: New-AuthServer
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016"
---

# New-AuthServer

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the New-AuthServer cmdlet to create an authorization server object in Microsoft Exchange and specify its AuthMetadataUrl. Exchange honors tokens issued by the authorization server for access by a partner application.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
New-AuthServer [-Name] <String> -AuthMetadataUrl <String> [-Confirm] [-DomainController <Fqdn>]
 [-Enabled <$true | $false>] [-TrustAnySSLCertificate] [-WhatIf] [<CommonParameters>]
```

### Set2
```
New-AuthServer [-Name] <String> -AuthMetadataUrl <String>
 -Type <Unknown | MicrosoftACS | Facebook | LinkedIn | ADFS | AzureAD> [-Confirm] [-DomainController <Fqdn>]
 [-Enabled <$true | $false>] [-TrustAnySSLCertificate] [-WhatIf] [<CommonParameters>]
```

### Set3
```
New-AuthServer [-Name] <String> -Type <Unknown | MicrosoftACS | Facebook | LinkedIn | ADFS | AzureAD>
 [-Confirm] [-DomainController <Fqdn>] [-Enabled <$true | $false>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Partner applications authorized by Exchange can access their resources after they're authenticated using server-to-server authentication. A partner application can authenticate by using self-issued tokens trusted by Exchange or by using an authorization server trusted by Exchange.

The New-AuthServer cmdlet creates a trusted authorization server object in Exchange, which allows it to trust tokens issued by the authorization server.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-AuthServer HRAppAuth -AuthMetadataUrl http://hrappauth.contoso.com/metadata/json/1
```

This command creates an authorization server.

## PARAMETERS

### -AuthMetadataUrl
The AuthMetadataUrl parameter specifies the URL for the Office 365 authorization server for your cloud-based organization. For details, see the Office 365 documentation.

```yaml
Type: String
Parameter Sets: Set1, Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies a name for the authorization server.

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

### -Type
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unknown | MicrosoftACS | Facebook | LinkedIn | ADFS | AzureAD
Parameter Sets: Set2, Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New and Set cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -Enabled
The Enabled parameter specifies whether the authorization server is enabled. Set the parameter to $false to prevent authorization tokens issued by this authorization server from being accepted.

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

### -TrustAnySSLCertificate
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: Set1, Set2
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/67539efd-309f-4155-8b8f-c370fe7681b6.aspx)
