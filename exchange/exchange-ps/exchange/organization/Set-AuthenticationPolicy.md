---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Online
title: Set-AuthenticationPolicy
schema: 2.0.0
monikerRange: "exchonline-ps"
---

# Set-AuthenticationPolicy

## SYNOPSIS
> [!NOTE]
> This topic describes a preview feature that isn't available to everyone, and is subject to change.

This cmdlet is available only in the cloud-based service.

Use the Set-AuthenticationPolicy cmdlet to modify authentication policies in Exchange Online.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-AuthenticationPolicy [-Identity] <AuthPolicyIdParameter> [-AllowBasicAuthActiveSync] [-AllowBasicAuthAutodiscover] [-AllowBasicAuthImap] [-AllowBasicAuthMapi] [-AllowBasicAuthOfflineAddressBook] [-AllowBasicAuthOutlookService] [-AllowBasicAuthPop] [-AllowBasicAuthPowershell] [-AllowBasicAuthReportingWebServices] [-AllowBasicAuthRest] [-AllowBasicAuthRpc] [-AllowBasicAuthSmtp] [-AllowBasicAuthWebServices] [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Set-AuthenticationPolicy -Identity "Engineering Group" -AllowBasicAuthReportingWebServices
```

This example modifies the authentication policy named Engineering Group to all Basic authentication for Exchange Remporting Web Services (EWS)

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
The AllowBasicAuthActiveSync switch specifies whther to allow Basic authentication with Exchange Active Sync.

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
The AllowBasicAuthAutodiscover switch specifies whther to allow Basic authentication with Autodiscover.

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
The AllowBasicAuthImap switch specifies whther to allow Basic authentication with IMAP.

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
The AllowBasicAuthMapi switch specifies whther to allow Basic authentication with MAPI.

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
The AllowBasicAuthOfflineAddressBook switch specifies whther to allow Basic authentication with Offline Address Books.

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
The AllowBasicAuthOutlookService switch specifies whther to allow Basic authentication with the Outlook service.

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
The AllowBasicAuthPop switch specifies whther to allow Basic authentication with POP.

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
The AllowBasicAuthPowerShell switch specifies whther to allow Basic authentication with PowerShell.

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
The AllowBasicAuthReporting Web Services switch specifies whther to allow Basic authentication with reporting web services.

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

### -AllowBasicAuthRest
The AllowBasicAuthRest switch specifies whther to allow Basic authentication with REST.

- To change the value to $true, use this switch without a value.

- To change the value to $false, use this exact syntax: -AllowBasicAuthRest:$false.

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
The AllowBasicAuthRpc switch specifies whther to allow Basic authentication with RPC.

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
The AllowBasicAuthSmtp switch specifies whther to allow Basic authentication with SMTP.

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
The AllowBasicAuthWebServices switch specifies whther to allow Basic authentication with Exchange Web Services (EWS). You don't need to specify a value with this switch.

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

- Destructive cmdlets (for example, Remove cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New and Set cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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
SThe WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

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

[Online Version](https://docs.microsoft.com/powershell/module/exchange/organization/set-authenticationpolicy)
