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
---

# Connect-IPPSSession

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [About the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

Use the Connect-IPPSSession cmdlet in the Exchange Online PowerShell V2 module to connect to Security & Compliance Center PowerShell or standalone Exchange Online Protection PowerShell using modern authentication. The cmdlet works for MFA or non-MFA enabled accounts.

**Note**: If your organization is on-premises Exchange, and you have Exchange Enterprise CAL with Services licenses for Exchange Online Protection (EOP), use the [Connect-ExchangeOnline](https://docs.microsoft.com/powershell/module/exchange/connect-exchangeonline) cmdlet in the [Exchange Online PowerShell connection instructions](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell) to connect to your EOP PowerShell environment.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Connect-IPPSSession
 [[-ConnectionUri] <String>]
 [[-AzureADAuthorizationEndpointUri] <String>]
 [[-DelegatedOrganization] <String>]
 [[-PSSessionOption] <PSSessionOption>]
 [[-Prefix] <String>]
 [[-CommandName] <String[]>]
 [[-FormatTypeName] <String[]>]
 [-AppId <String>]
 [-BypassMailboxAnchoring]
 [-Certificate <X509Certificate2>]
 [-CertificateFilePath <String>]
 [-CertificatePassword <SecureString>]
 [-CertificateThumbprint <String>]
 [-Credential <PSCredential>]
 [-Organization <String>]
 [-UserPrincipalName <String>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet allows you to create a remote PowerShell session to Exchange-related PowerShell environments other than Exchange Online PowerShell. For example, Security & Compliance Center PowerShell or standalone Exchange Online Protection PowerShell (for organizations without Exchange Online mailboxes).

For details about the current and past public versions of the EXO V2 module, see [Release notes](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2#release-notes). This topic is written for the current public version. Features or parameters that are only available in a Preview version of the module are specifically noted.

## EXAMPLES

### Example 1
```powershell
$UserCredential = Get-Credential
Connect-IPPSSession -Credential $UserCredential
```

This example connects to Security & Compliance Center PowerShell in a Microsoft 365 organization.

The first command gets the user credentials and stores them in the $UserCredential variable.

The second command connects the current PowerShell session using the credentials in the $UserCredential, which isn't MFA enabled.

After the Connect-IPPSSession command is complete, the password key in the $UserCredential variable is emptied, and you can run Security & Compliance Center PowerShell cmdlets.

### Example 2
```powershell
Connect-IPPSSession -Credential (Get-Credential) -ConnectionUri https://ps.protection.outlook.com/powershell-liveid/
```

This example connects to standalone Exchange Online Protection PowerShell in an organization that doesn't have Exchange Online mailboxes.

### Example 3
```powershell
Connect-IPPSSession -AppId <%App_id%> -CertificateFilePath "C:\users\navin\Documents\TestCert.pfx" -Organization "contoso.onmicrosoft.com"
```

Using the EXO V2 module version 2.0.6-Preview5 or later, this example connects to Security & Compliance Center PowerShell in an unattended scripting scenario using the public key of a certificate.

### Example 4
```powershell
Connect-IPPSSession -AppId <%App_id%> -CertificateThumbprint <%Thumbprint string of certificate%> -Organization "contoso.onmicrosoft.com"
```

Using the EXO V2 module version 2.0.6-Preview5 or later, this example connects to Security & Compliance Center PowerShell in an unattended scripting scenario using a certificate thumbprint.

### Example 5
```powershell
Connect-IPPSSession -AppId <%App_id%> -Certificate <%X509Certificate2 object%> -Organization "contoso.onmicrosoft.com"
```

Using the EXO V2 module version 2.0.6-Preview5 or later, this example connects to Security & Compliance Center PowerShell in an unattended scripting scenario using a certificate file. This method is best suited for scenarios where the certificate is stored in remote machines and fetched at runtime. For example, the certificate is stored in the Azure Key Vault.

## PARAMETERS

### -ConnectionUri
The ConnectionUri parameter specifies the connection endpoint for the remote PowerShell session. The following PowerShell environments and related values are supported:

- Security & Compliance Center PowerShell in Microsoft 365 or Microsoft 365 GCC: Don't use this parameter. The required value is `https://ps.compliance.protection.outlook.com/powershell-liveid/`, but that's also the default value, so you don't need to use this parameter.
- Security & Compliance Center PowerShell in Office 365 operated by 21Vianet: `https://ps.compliance.protection.partner.outlook.cn/powershell-liveid`
- Security & Compliance Center PowerShell in Microsoft GCC High: `https://ps.compliance.protection.office365.us/powershell-liveid/`
- Security & Compliance Center PowerShell in Microsoft DoD: `https://l5.ps.compliance.protection.office365.us/powershell-liveid/`
- Exchange Online Protection PowerShell in standalone EOP organizations without Exchange Online mailboxes: `https://ps.protection.outlook.com/powershell-liveid/`

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

### -AzureADAuthorizationEndpointUri
The AzureADAuthorizationEndpointUri parameter specifies the Azure AD Authorization endpoint that can issue OAuth2 access tokens. The following PowerShell environments and related values are supported:

- Security & Compliance Center PowerShell in Microsoft 365 or Microsoft 365 GCC: Don't use this parameter. The required value is `https://login.microsoftonline.com/common`, but that's also the default value, so you don't need to use this parameter.
- Security & Compliance Center PowerShell in Office 365 operated by 21Vianet: `https://login.chinacloudapi.cn/common`
- Security & Compliance Center PowerShell in Microsoft GCC High or Microsoft DoD: `https://login.microsoftonline.us/common`

If you use the UserPrincipalName parameter, you don't need to use the AzureADAuthorizationEndpointUri parameter for MFA or federated users in environments that normally require it (UserPrincipalName or AzureADAuthorizationEndpointUri is required; OK to use both).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DelegatedOrganization
This parameter is reserved for internal Microsoft use.

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

And you use the variable name as the value for this parameter (for example, `$Options`).

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

### -Prefix
The Prefix parameter specifies an alias to add to nouns in the names of older remote PowerShell cmdlets (cmdlet with nouns that don't already start with EXO). A valid value is a text string without spaces, and you can't use the value EXO (this prefix is reserved for PowerShell V2 module cmdlets).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CommandName
The CommandName parameter specifies the comma separated list of commands to import into the session. Use this parameter for applications or scripts that use a specific set of cmdlets. Reducing the number of cmdlets in the session helps improve performance and reduces the memory footprint of the application or script.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FormatTypeName
The FormatTypeName parameter specifies the output format of the cmdlet.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 6
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AppId
The AppId parameter specifies the application ID of the service principal that's used in certificate based authentication (CBA). A valid value is the GUID of the application ID (service principal). For example, `36ee4c6c-0812-40a2-b820-b22ebd02bce3`.

For more information, see [App-only authentication for unattended scripts in the EXO V2 module](https://aka.ms/exov2-cba).

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

### -Certificate
The Certificate parameter specifies the certificate that's used for certificate-based authentication (CBA). A valid value is the X509Certificate2 object value of the certificate.

Don't use this parameter with the CertificateFilePath or CertificateThumbprint parameters.

For more information about CBA, see [App-only authentication for unattended scripts in the EXO V2 module](https://aka.ms/exov2-cba).

```yaml
Type: X509Certificate2
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CertificateFilePath
The CertificateFilePath parameter specifies the certificate that's used for CBA. A valid value is the complete public path to the certificate file.

Don't use this parameter with the Certificate or CertificateThumbprint parameters.

For more information about CBA, see [App-only authentication for unattended scripts in the EXO V2 module](https://aka.ms/exov2-cba).

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

### -CertificatePassword
The CertificatePassword parameter specifies the password that's required to open the certificate file when you use the CertificateFilePath parameter to identify the certificate that's used for CBA.

This parameter uses the syntax `(ConvertTo-SecureString -String '<password>' -AsPlainText -Force)`. Or, before you run this command, store the password as a variable (for example, `$password = Read-Host "Enter password" -AsSecureString`), and then use the variable name (`$password`) for this parameter.

For more information about CBA, see [App-only authentication for unattended scripts in the EXO V2 module](https://aka.ms/exov2-cba).

```yaml
Type: SecureString
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CertificateThumbprint
The CertificateThumbprint parameter specifies the certificate that's used for CBA. A valid value is the thumbprint value of the certificate. For example, `83213AEAC56D61C97AEE5C1528F4AC5EBA7321C1`.

Don't use this parameter with the Certificate or CertificateFilePath parameters.

**Note**: The CertificateThumbprint parameter is supported only in Microsoft Windows.

For more information about CBA, see [App-only authentication for unattended scripts in the EXO V2 module](https://aka.ms/exov2-cba).

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

### -Credential
The Credential parameter specifies the username and password that's used to connect to Exchange Online PowerShell. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions. Don't use this parameter for accounts that use multi-factor authentication (MFA).

Before you run the Connect-IPPSSession command, store the username and password in a variable (for example, `$UserCredential = Get-Credential`). Then, use the variable name (`$UserCredential`) for this parameter.

After the Connect-IPPSSession command is complete, the password key in the variable is emptied.

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

### -Organization
The Organization parameter specifies the organization that's used in CBA. Be sure to use an .onmicrosoft.com domain for the parameter value. Otherwise, you might encounter cryptic permission issues when you run commands in the app context.

For more information about CBA, see [App-only authentication for unattended scripts in the EXO V2 module](https://aka.ms/exov2-cba).

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

### -UserPrincipalName
The UserPrincipalName parameter specifies the account that you want to use to connect (for example, navin@contoso.onmicrosoft.com). Using this parameter allows you to skip the username dialog in the modern authentication prompt for credentials (you only need to enter your password).

If you use the UserPrincipalName parameter, you don't need to use the AzureADAuthorizationEndpointUri parameter for MFA or federated users in environments that normally require it (UserPrincipalName or AzureADAuthorizationEndpointUri is required; OK to use both).

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

## OUTPUTS

## NOTES

## RELATED LINKS
