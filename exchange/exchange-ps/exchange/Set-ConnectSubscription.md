---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Online
title: Set-ConnectSubscription
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Set-ConnectSubscription

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-ConnectSubscription cmdlet to reauthorize or change the settings for any contact integration subscription that you've set up between an external networking service (for example Facebook and LinkedIn), and your cloud-based mailbox.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Facebook
```
Set-ConnectSubscription -Identity <AggregationSubscriptionIdParameter> -RedirectUri <String>
 [-Confirm]
 [-WhatIf] [<CommonParameters>]
```

### LinkedIn
```
Set-ConnectSubscription -Identity <AggregationSubscriptionIdParameter> [-LinkedIn] -OAuthVerifier <String>
 -RequestSecret <String> -RequestToken <String>
 [-Confirm]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
When you set up a contact subscription, contacts from the external networking service are integrated into your cloud-based mailbox.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-ConnectSubscription -LinkedIn $true -OAuthVerifier <OAuthVerifier value> -RequestSecret <Request Secret value> -RequestToken <RequestToken value>
```

This example modifies a people connection to LinkedIn.

## PARAMETERS

### -Identity
The Identity parameter specifies the provider identification number that uniquely identifies the provider network.

```yaml
Type: AggregationSubscriptionIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -LinkedIn
The LinkedIn parameter specifies whether you want to edit a LinkedIn subscription.

```yaml
Type: SwitchParameter
Parameter Sets: LinkedIn
Aliases:
Applicable: Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OAuthVerifier
The OAuthVerifier parameter specifies the verification code associated with the request token. You must provide a value for the OAuthVerifier parameter and the RequestToken parameter values in exchange for an access token.

```yaml
Type: String
Parameter Sets: LinkedIn
Aliases:
Applicable: Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RedirectUri
The RedirectUri parameter specifies the host name used to connect to the server running Exchange from outside the firewall.

```yaml
Type: String
Parameter Sets: Facebook
Aliases:
Applicable: Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestSecret
The RequestSecret parameter specifies the secret associated with the access token.

```yaml
Type: String
Parameter Sets: LinkedIn
Aliases:
Applicable: Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestToken
The RequestToken parameter specifies the access token that provides access to protected resources accessible through LinkedIn. You must provide a value for the OAuthVerifier parameter and the RequestToken parameter values in exchange for an access token.

```yaml
Type: String
Parameter Sets: LinkedIn
Aliases:
Applicable: Exchange Online
Required: True
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
Applicable: Exchange Online
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
Applicable: Exchange Online
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

[Online Version](https://technet.microsoft.com/library/a13fdafb-1ad8-47ee-b57f-2377d67c01ae.aspx)
