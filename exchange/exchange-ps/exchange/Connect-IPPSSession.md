---
external help file: ExchangeOnlineManagement-help.xml
Module Name: ExchangeOnlineManagement
online version: https://docs.microsoft.com/powershell/module/exchange/connect-ippssession
applicable: Exchange Online
title: Connect-IPPSSession
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer: navgupta
monikerRange: "exchonline-ps"
---

# Connect-IPPSSession

## SYNOPSIS
Security & Compliance Center PowerShell allows you to manage your Security & Compliance Center settings from the command line. You use Windows PowerShell on your local computer to create a remote PowerShell session to the Security & Compliance Center.

## SYNTAX

```
Connect-IPPSSession [[-ConnectionUri] <String>]
 [[-AzureADAuthorizationEndpointUri] <String>]
 [-BypassMailboxAnchoring]
 [-Credential <PSCredential>]
 [[-DelegatedOrganization] <String>]
 [[-PSSessionOption] <PSSessionOption>]
 [-UserPrincipalName <String>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet allows you to create a Remote PowerShell session to Security & Compliance center 

## EXAMPLES

### Example 1
```powershell
$UserCredential = Get-Credential
Connect-IPPSSession -Credential $UserCredential
```

The first command gets the user credentials and stores them in the $UserCredential variable.

The second command connects the current PowerShell session using the credentials in the $UserCredential, which isn't MFA enabled. Note that after the second command is complete, the password key in the $UserCredential variable becomes empty.

After the Connect-IPPSSession command is successful, you can run Security & Compliance cmdlets.

## PARAMETERS

### -AzureADAuthorizationEndpointUri
The AzureADAuthorizationEndpointUri parameter specifies the Azure AD Authorization endpoint Uri that can issue OAuth2 access tokens.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassMailboxAnchoring
The BypassMailboxAnchoring switch bypasses the use of the mailbox anchoring hint. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectionUri
The ConnectionUri parameter specifies the connection endpoint for the remote PowerShell session.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential
The Credential parameter specifies the username and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions.

A value for this parameter requires the Get-Credential cmdlet. To pause this command and receive a prompt for credentials, use the value `(Get-Credential)`. Or, before you run this command, store the credentials in a variable (for example, `$cred = Get-Credential`) and then use the variable name (`$cred`) for this parameter. For more information, see [Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DelegatedOrganization
The DelegatedOrganization parameter specifies the customer organization that you want to manage (for example, contosoelectronics.onmicrosoft.com). This parameter only works if the customer organization has agreed to your delegated management via the CSP program.

After you successfully authenticate, the cmdlets in this session are mapped to the customer organization, and all operations in this session are done on the customer organization.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PSSessionOption
The PSSessionOption parameter specifies the PowerShell session options to use in your connection to Exchange Online. You store the output of the [New-PSSessionOption](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/new-pssessionoption) command in a variable, for example:

`$Options = New-PSSessionOption <Settings>`

And you use the variable name as the value for this parameter (for example, $Options).

```yaml
Type: PSSessionOption
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPrincipalName
The UserPrincipalName parameter specifies the account that you want to use to connect (for example, navin@contoso.onmicrosoft.com). Using this parameter allows you to skip the first screen in authentication prompt.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
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
