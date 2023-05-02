---
external help file: ExchangeOnlineManagement-help.xml
Module Name: ExchangeOnlineManagement
online version: https://learn.microsoft.com/powershell/module/exchange/connect-ippssession
applicable: Exchange Online
title: Connect-IPPSSession
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Connect-IPPSSession

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Connect-IPPSSession cmdlet in the Exchange Online PowerShell module to connect to Security & Compliance PowerShell PowerShell using modern authentication. The cmdlet works for MFA or non-MFA enabled accounts.

**Note**: Version 3.2.0-Preview3 or later of the module supports REST API mode for most Security & Compliance PowerShell cmdlets (Basic authentication in WinRM on the local computer isn't required for REST API mode). For more information, see [Prerequisites for the Exchange Online PowerShell module](https://learn.microsoft.com/powershell/exchange/exchange-online-powershell-v2#prerequisites-for-the-exchange-online-powershell-module).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

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
 [-UseRPSSession]
 [<CommonParameters>]
```

## DESCRIPTION
For detailed connection instructions, including prerequisites, see [Connect to Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/connect-to-scc-powershell).

## EXAMPLES

### Example 1
```powershell
Connect-IPPSSession -UserPrincipalName michelle@contoso.onmicrosoft.com
```

This example connects to Security & Compliance PowerShell in a Microsoft 365 organization. You're prompted for the password of the michelle@contoso.onmicrosoft.com account.

### Example 2
```powershell
Connect-IPPSSession -AppId <%App_id%> -CertificateFilePath "C:\users\navin\Documents\TestCert.pfx" -Organization "contoso.onmicrosoft.com"
```

Using the Exchange Online PowerShell module version 2.0.6-Preview5 or later, this example connects to Security & Compliance PowerShell in an unattended scripting scenario using the public key of a certificate.

### Example 3
```powershell
Connect-IPPSSession -AppId <%App_id%> -CertificateThumbprint <%Thumbprint string of certificate%> -Organization "contoso.onmicrosoft.com"
```

Using the Exchange Online PowerShell module version 2.0.6-Preview5 or later, this example connects to Security & Compliance PowerShell in an unattended scripting scenario using a certificate thumbprint.

### Example 4
```powershell
Connect-IPPSSession -AppId <%App_id%> -Certificate <%X509Certificate2 object%> -Organization "contoso.onmicrosoft.com"
```

Using the Exchange Online PowerShell module version 2.0.6-Preview5 or later, this example connects to Security & Compliance PowerShell in an unattended scripting scenario using a certificate file. This method is best suited for scenarios where the certificate is stored in remote machines and fetched at runtime. For example, the certificate is stored in the Azure Key Vault.

## PARAMETERS

### -ConnectionUri
The ConnectionUri parameter specifies the connection endpoint for the remote PowerShell session. The following PowerShell environments and related values are supported:

- Security & Compliance PowerShell in Microsoft 365 or Microsoft 365 GCC: Don't use this parameter. The required value is `https://ps.compliance.protection.outlook.com/powershell-liveid/`, but that's also the default value, so you don't need to use this parameter.
- Security & Compliance PowerShell in Office 365 operated by 21Vianet: `https://ps.compliance.protection.partner.outlook.cn/powershell-liveid`
- Security & Compliance PowerShell in Microsoft GCC High: `https://ps.compliance.protection.office365.us/powershell-liveid/`
- Security & Compliance PowerShell in Microsoft DoD: `https://l5.ps.compliance.protection.office365.us/powershell-liveid/`

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

- Security & Compliance PowerShell in Microsoft 365 or Microsoft 365 GCC: Don't use this parameter. The required value is `https://login.microsoftonline.com/common`, but that's also the default value, so you don't need to use this parameter.
- Security & Compliance PowerShell in Office 365 operated by 21Vianet: `https://login.chinacloudapi.cn/common`
- Security & Compliance PowerShell in Microsoft GCC High or Microsoft DoD: `https://login.microsoftonline.us/common`

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
The DelegatedOrganization parameter specifies the customer organization that you want to manage (for example, contosoelectronics.onmicrosoft.com). This parameter works only if the customer organization has agreed to your delegated management via the CSP program.

After you successfully authenticate, the cmdlets in this session are mapped to the customer organization, and all operations in this session are done on the customer organization.

**Notes**:

- Use the primary .onmicrosoft.com domain of the delegated organization for the value of this parameter.
- You must use the AzureADAuthorizationEndpointUri parameter with this parameter.

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
The PSSessionOption parameter specifies the remote PowerShell session options to use in your connection to Security & Compliance PowerShell.

Store the output of the [New-PSSessionOption](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/new-pssessionoption) command in a variable (for example, `$PSOptions = New-PSSessionOption <Settings>`), and use the variable name as the value for this parameter (for example, `$PSOptions`).

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
The Prefix parameter specifies a text value to add to the names of Security & Compliance PowerShell cmdlets when you connect. For example, Get-ComplianceCase becomes Get-ContosoComplianceCase when you use the value Contoso for this parameter.

- The Prefix value can't contain spaces or special characters like underscores or asterisks.
- You can't use the Prefix value EXO. That value is reserved for the nine exclusive **Get-EXO\*** cmdlets that are built into the module.
- The Prefix parameter affects only imported Security & Compliance cmdlet names. It doesn't affect the names of cmdlets that are built into the module (for example, Disconnect-ExchangeOnline).

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

For more information, see [App-only authentication for unattended scripts in the Exchange Online PowerShell module](https://aka.ms/exo-cba).

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

For more information about CBA, see [App-only authentication for unattended scripts in the Exchange Online PowerShell module](https://aka.ms/exo-cba).

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

For more information about CBA, see [App-only authentication for unattended scripts in the Exchange Online PowerShell module](https://aka.ms/exo-cba).

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

You can use the following methods as a value for this parameter:

- `(ConvertTo-SecureString -String '<password>' -AsPlainText -Force)`.
- Before you run this command, store the password as a variable (for example, `$password = Read-Host "Enter password" -AsSecureString`), and then use the variable (`$password`) for the value.
- `(Get-Credential).password` to be prompted to enter the password securely when you run this command.

For more information about CBA, see [App-only authentication for unattended scripts in the Exchange Online PowerShell module](https://aka.ms/exo-cba).

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

For more information about CBA, see [App-only authentication for unattended scripts in the Exchange Online PowerShell module](https://aka.ms/exo-cba).

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
The Organization parameter specifies the organization when you connect using CBA. You must use the primary .onmicrosoft.com domain of the organization for the value of this parameter.

For more information about CBA, see [App-only authentication for unattended scripts in the Exchange Online PowerShell module](https://aka.ms/exo-cba).

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
The UserPrincipalName parameter specifies the account that you want to use to connect (for example, navin@contoso.onmicrosoft.com). Using this parameter allows you to skip entering a username in the modern authentication credentials prompt (you're prompted to enter a password).

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

### -UseRPSSession
This parameter is available in version 3.2.0-Preview3 or later of the module.

The UseRPSSession switch allows you to connect to Security & Compliance PowerShell using traditional remote PowerShell access to all cmdlets. You don't need to specify a value with this switch.

This switch requires that Basic authentication is enabled in WinRM on the local computer. For more information, see [Prerequisites in the Exchange Online PowerShell module](https://aka.ms/exov3-module#turn-on-basic-authentication-in-winrm).

If you don't use this switch, Basic authentication in WinRM is not required.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
