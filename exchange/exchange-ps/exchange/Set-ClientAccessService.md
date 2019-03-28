---
external help file: Microsoft.Exchange.WebClient-Help.xml
applicable: Exchange Server 2016, Exchange Server 2019
title: Set-ClientAccessService
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2016 || exchserver-ps-2019"
---

# Set-ClientAccessService

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-ClientAccessService cmdlet to modify settings that are associated with the Client Access server role.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### AlternateServiceAccount
```
Set-ClientAccessService [-Identity] <ClientAccessServerIdParameter> [-AlternateServiceAccountCredential <PSCredential[]>] [-CleanUpInvalidAlternateServiceAccountCredentials] [-RemoveAlternateServiceAccountCredentials]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf] [<CommonParameters>]
```

### Identity
```
Set-ClientAccessService [-Identity] <ClientAccessServerIdParameter> [-Array <ClientAccessArrayIdParameter>] [-AutoDiscoverServiceInternalUri <Uri>] [-AutoDiscoverSiteScope <MultiValuedProperty>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-ClientAccessService -Identity "MBX-01" -AutoDiscoverServiceInternalUri "https://mbx01.contoso.com/autodiscover/autodiscover.xml" -AutoDiscoverSiteScope "Mail"
```

This example configures the internal Autodiscover URL for the Active Directory site named Mail in the Client Access service on the server named MBX-01.

## PARAMETERS

### -Identity
The Identity parameter specifies the server that you want to modify. You can use any value that uniquely identifies the server. For example:

- Name

- Distinguished name (DN)

- FQDN

- GUID

```yaml
Type: ClientAccessServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AlternateServiceAccountCredential
The AlternateServiceAccountCredential parameter specifies an alternative service account that's typically used for Kerberos authentication in Exchange Server 2010 coexistence environments.

This parameter requires you to create a credentials object by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).

```yaml
Type: PSCredential[]
Parameter Sets: AlternateServiceAccount
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Array
This parameter is reserved for internal Microsoft use.

```yaml
Type: ClientAccessArrayIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDiscoverServiceInternalUri
The AutoDiscoverServiceInternalUri parameter specifies the internal URL of the Autodiscover service.

```yaml
Type: Uri
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDiscoverSiteScope
The AutoDiscoverSiteScope parameter specifies the Active Directory site that the Autodiscover service is authoritative for. Clients that connect to the Autodiscover service by using the internal URL need to exist in the specified site.

To see the available Active Directory sites, use the Get-ADSite cmdlet.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\>".

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CleanUpInvalidAlternateServiceAccountCredentials
The CleanUpInvalidAlternateServiceAccountCredentials switch specifies whether to remove a previously configured alternate service account that's no longer valid. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: AlternateServiceAccount
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
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
Applicable: Exchange Server 2016, Exchange Server 2019
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
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveAlternateServiceAccountCredentials
The RemoveAlternateServiceAccountCredentials switch specifies whether to remove a previously distributed alternate service account. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: AlternateServiceAccount
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
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
Applicable: Exchange Server 2016, Exchange Server 2019
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

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/59440ef8-8ea4-4168-9b75-8f4d7aa6652d.aspx)
