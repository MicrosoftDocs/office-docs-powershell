---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Online
title: Set-AuthenticationPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Set-AuthenticationPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-AuthenticationPolicy cmdlet to modify authentication policies in Exchange Online.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
Set-AuthenticationPolicy [-Identity] <AuthPolicyIdParameter>
 [-AllowBasicAuthActiveSync]
 [-AllowBasicAuthAutodiscover]
 [-AllowBasicAuthImap]
 [-AllowBasicAuthMapi]
 [-AllowBasicAuthOfflineAddressBook]
 [-AllowBasicAuthOutlookService]
 [-AllowBasicAuthPop]
 [-AllowBasicAuthPowershell]
 [-AllowBasicAuthReportingWebServices]
 [-AllowBasicAuthRpc]
 [-AllowBasicAuthSmtp]
 [-AllowBasicAuthWebServices]
 [-Confirm]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/exchange-server/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```
Set-AuthenticationPolicy -Identity "Engineering Group" -AllowBasicAuthReportingWebServices
```

This example modifies the authentication policy named Engineering Group to all Basic authentication for Exchange Reporting Web Services.

## PARAMETERS

### -Identity
The Identity parameter specifies the authentication policy you want to modify. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: AuthPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthActiveSync
The AllowBasicAuthActiveSync switch specifies whether to allow Basic authentication with Exchange Active Sync.

- To change the value to $true, use this switch without a value.

- To change the value to $false, use this exact syntax: -AllowBasicAuthActiveSync:$false.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthAutodiscover
The AllowBasicAuthAutodiscover switch specifies whether to allow Basic authentication with Autodiscover.

- To change the value to $true, use this switch without a value.

- To change the value to $false, use this exact syntax: -AllowBasicAuthAutodiscover:$false.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthImap
The AllowBasicAuthImap switch specifies whether to allow Basic authentication with IMAP.

- To change the value to $true, use this switch without a value.

- To change the value to $false, use this exact syntax: -AllowBasicAuthImap:$false.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthMapi
The AllowBasicAuthMapi switch specifies whether to allow Basic authentication with MAPI.

- To change the value to $true, use this switch without a value.

- To change the value to $false, use this exact syntax: -AllowBasicAutMapi:$false.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthOfflineAddressBook
The AllowBasicAuthOfflineAddressBook switch specifies whether to allow Basic authentication with Offline Address Books.

- To change the value to $true, use this switch without a value.

- To change the value to $false, use this exact syntax: -AllowBasicAuthOfflineAddressBook:$false.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthOutlookService
The AllowBasicAuthOutlookService switch specifies whether to allow Basic authentication with the Outlook service.

- To change the value to $true, use this switch without a value.

- To change the value to $false, use this exact syntax: -AllowBasicAuthOutlookService:$false.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthPop
The AllowBasicAuthPop switch specifies whether to allow Basic authentication with POP.

- To change the value to $true, use this switch without a value.

- To change the value to $false, use this exact syntax: -AllowBasicAuthPop:$false.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthPowershell
The AllowBasicAuthPowerShell switch specifies whether to allow Basic authentication with PowerShell.

- To change the value to $true, use this switch without a value.

- To change the value to $false, use this exact syntax: -AllowBasicAuthPowershell:$false.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthReportingWebServices
The AllowBasicAuthReporting Web Services switch specifies whether to allow Basic authentication with reporting web services.

- To change the value to $true, use this switch without a value.

- To change the value to $false, use this exact syntax: -AllowBasicAuthReportingWebServices:$false.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthRpc
The AllowBasicAuthRpc switch specifies whether to allow Basic authentication with RPC.

- To change the value to $true, use this switch without a value.

- To change the value to $false, use this exact syntax: -AllowBasicAuthRpc:$false.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthSmtp
The AllowBasicAuthSmtp switch specifies whether to allow Basic authentication with SMTP.

- To change the value to $true, use this switch without a value.

- To change the value to $false, use this exact syntax: -AllowBasicAuthSmtp:$false.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthWebServices
The AllowBasicAuthWebServices switch specifies whether to allow Basic authentication with Exchange Web Services (EWS). You don't need to specify a value with this switch.

- To change the value to $true, use this switch without a value.

- To change the value to $false, use this exact syntax: -AllowBasicAuthWebServices:$false.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: False
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://docs.microsoft.com/powershell/module/exchange/organization/set-authenticationpolicy)
