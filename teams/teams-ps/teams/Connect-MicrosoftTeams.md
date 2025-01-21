---
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/connect-microsoftteams
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---
# Connect-MicrosoftTeams

## SYNOPSIS

The Connect-MicrosoftTeams cmdlet connects an authenticated account for use with cmdlets from the MicrosoftTeams module.

## SYNTAX

### UserCredential (Default)
```
Connect-MicrosoftTeams
[-TenantId <String>]
[-Credential <PSCredential>]
[-AccountId <String>]
[-LogLevel <LogLevel>]
[-LogFilePath <String>]
[-TeamsEnvironmentName <String>]
[-UseDeviceAuthentication]
[-WhatIf]
[-Confirm]
[<CommonParameters>]
```

### ServicePrincipalCertificate
```
Connect-MicrosoftTeams
-TenantId <String>
-Certificate <X509Certificate2>
-ApplicationId <String>
[-LogLevel <LogLevel>]
[-LogFilePath <String>]
[-WhatIf]
[-Confirm]
[<CommonParameters>]
```

### ServicePrincipalCertificateThumbprint
```
Connect-MicrosoftTeams
-TenantId <String>
-CertificateThumbprint <String>
-ApplicationId <String>
[-LogLevel <LogLevel>]
[-LogFilePath <String>]
[-WhatIf]
[-Confirm]
[<CommonParameters>]
```

### AccessTokens
```
Connect-MicrosoftTeams
[-TenantId <String>]
-AccessTokens <String[]>
[-LogLevel <LogLevel>]
[-LogFilePath <String>]
[-WhatIf]
[-Confirm]
[<CommonParameters>]
```

## DESCRIPTION
The Connect-MicrosoftTeams cmdlet connects to Microsoft Teams with an authenticated account for use with cmdlets from the MicrosoftTeams PowerShell module. After executing this cmdlet, you can disconnect from MicrosoftTeams account using Disconnect-MicrosoftTeams.

**Note**: With versions 4.x.x or later, enablement of basic authentication is not needed anymore in commercial, GCC, GCC High, and DoD environments.

## EXAMPLES

### Example 1: Connect to MicrosoftTeams
This example connects to an Azure account. You must provide a Microsoft account or organizational ID credentials. If multi-factor authentication is enabled for your credentials, you must log in using the interactive option.

```powershell
Connect-MicrosoftTeams
Account                 Environment    Tenant                                TenantId
-------                 -----------  ------------------------------------  ------------------------------------
user@contoso.com        AzureCloud   xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx  xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

### Example 2: Connect to MicrosoftTeams
The first command prompts for user credentials and stores them in the $Credential variable. The second command connects to an Azure account using the credentials stored in $credential. This account authenticates with Azure using organizational ID credentials.

```powershell
$credential = Get-Credential
Connect-MicrosoftTeams -Credential $credential
Account                 Environment    Tenant                                TenantId
-------                 -----------  ------------------------------------  ------------------------------------
user@contoso.com        AzureCloud   xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx  xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

### Example 3: Connect to MicrosoftTeams in a specific environment
This example connects to an Azure account in a specific environment. You must provide a Microsoft account or organizational ID credentials. If multi-factor authentication is enabled for your credentials, you must log in using the interactive option.

```powershell
Connect-MicrosoftTeams -TeamsEnvironmentName TeamsGCCH
Account                 Environment    Tenant                                TenantId
-------                 -----------  ------------------------------------  ------------------------------------
user@contoso.com        TeamsGCCH   xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx  xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

### Example 4: Connect to MicrosoftTeams using a certificate thumbprint
This example demonstrates how to authenticate using a certificate thumbprint. Application-based authentication has been reintroduced with version 4.7.1-preview. For details and supported cmdlets, please see [Application-based authentication in Teams PowerShell Module](https://learn.microsoft.com/microsoftteams/teams-powershell-application-authentication).

```powershell
Connect-MicrosoftTeams -CertificateThumbprint "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" -ApplicationId "00000000-0000-0000-0000-000000000000" -TenantId "YYYYYYYY-YYYY-YYYY-YYYY-YYYYYYYYYYYY"
```

### Example 5: Connect to MicrosoftTeams using a certificate object
This example demonstrates how to authenticate using a certificate object. The Certificate parameter is available from Teams PowerShell Module version 4.9.2-preview or later. For details about application-based authentication and supported cmdlets, see [Application-based authentication in Teams PowerShell Module](https://learn.microsoft.com/microsoftteams/teams-powershell-application-authentication).

```powershell
$cert = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2("C:\exampleCert.pfx",$password)
Connect-MicrosoftTeams -Certificate $cert -ApplicationId "00000000-0000-0000-0000-000000000000" -TenantId "YYYYYYYY-YYYY-YYYY-YYYY-YYYYYYYYYYYY"
```

### Example 6: Connect to MicrosoftTeams using Application-based Access Tokens
This example demonstrates how to authenticate with an application using Access Tokens. Access Tokens can be retrieved via the login.microsoftonline.com endpoint. It requires two Access Tokens: "MS Graph" and "Skype and Teams Tenant Admin API" resources.

Application-based authentication has been reintroduced with version 4.7.1-preview. For details and supported cmdlets, see [Application-based authentication in Teams PowerShell Module](https://learn.microsoft.com/microsoftteams/teams-powershell-application-authentication).

```powershell
$ClientSecret   = "..."
$ApplicationID = "00000000-0000-0000-0000-000000000000"
$TenantID = "YYYYYYYY-YYYY-YYYY-YYYY-YYYYYYYYYYYY"

$graphtokenBody = @{
   Grant_Type    = "client_credentials"
   Scope         = "https://graph.microsoft.com/.default"
   Client_Id     = $ApplicationID
   Client_Secret = $ClientSecret
}

$graphToken = Invoke-RestMethod -Uri "https://login.microsoftonline.com/$TenantID/oauth2/v2.0/token" -Method POST -Body $graphtokenBody | Select-Object -ExpandProperty Access_Token

$teamstokenBody = @{
   Grant_Type    = "client_credentials"
   Scope         = "48ac35b8-9aa8-4d74-927d-1f4a14a0b239/.default"
   Client_Id     = $ApplicationID
   Client_Secret = $ClientSecret
}

$teamsToken = Invoke-RestMethod -Uri "https://login.microsoftonline.com/$TenantID/oauth2/v2.0/token" -Method POST -Body $teamstokenBody | Select-Object -ExpandProperty Access_Token

Connect-MicrosoftTeams -AccessTokens @("$graphToken", "$teamsToken")
```

### Example 7: Connect to MicrosoftTeams using Access Tokens in the delegated flow
This example demonstrates how to sign in using Access Tokens. Admin can retrieve Access Tokens via the login.microsoftonline.com endpoint. It requires two tokens, MS Graph Access Token and Teams Resource token.

A delegated flow, such as Resource Owner Password Credentials (ROPC) or device code, must be used, with the following delegated app permissions required.

| API | Grant type | Permission |
|-|-|-|
| Microsoft Graph | Delegated | User.Read.All |
| Microsoft Graph | Delegated | Group.ReadWrite.All |
| Microsoft Graph | Delegated | AppCatalog.ReadWrite.All |
| Microsoft Graph | Delegated | TeamSettings.ReadWrite.All |
| Microsoft Graph | Delegated | Channel.Delete.All |
| Microsoft Graph | Delegated | ChannelSettings.ReadWrite.All |
| Microsoft Graph | Delegated | ChannelMember.ReadWrite.All |
| Skype and Teams Tenant Admin API | Delegated | user_impersonation |

```powershell
$ClientID = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
$ClientSecret = "..."
$ClientSecret = [Net.WebUtility]::URLEncode($ClientSecret)
$TenantID = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
$Username = "user@contoso.onmicrosoft.com"
$Password = "..."
$Password = [Net.WebUtility]::URLEncode($Password)

$URI = "https://login.microsoftonline.com/$TenantID/oauth2/v2.0/token"
$Body = "client_id=$ClientID&client_secret=$ClientSecret&grant_type=password&username=$Username&password=$Password"
$RequestParameters = @{
  URI = $URI
  Method = "POST"
  ContentType = "application/x-www-form-urlencoded"
}
$GraphToken = (Invoke-RestMethod @RequestParameters -Body "$Body&scope=https://graph.microsoft.com/.default").access_token
$TeamsToken = (Invoke-RestMethod @RequestParameters -Body "$Body&scope=48ac35b8-9aa8-4d74-927d-1f4a14a0b239/.default").access_token
Connect-MicrosoftTeams -AccessTokens @($GraphToken, $TeamsToken)

Account                 Environment    Tenant                                TenantId
-------                 -----------  ------------------------------------  ------------------------------------
user@contoso.com        AzureCloud   xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx  xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

## PARAMETERS

### AccessTokens
Specifies access tokens for "MS Graph" and "Skype and Teams Tenant Admin API" resources. Both the tokens used should be of the same type.

- Application-based authentication has been reintroduced with version 4.7.1-preview. For details and supported cmdlets, see [Application-based authentication in Teams PowerShell Module](https://learn.microsoft.com/microsoftteams/teams-powershell-application-authentication).

- Delegated flow - The following steps must be performed by Tenant Admin in the Azure portal when using your own application.

   Steps to configure the Microsoft Entra application.
   1. Go to Azure portal and go to App Registrations.
   2. Create or select the existing application.
   3. Add the following permission to this Application.
   4. Click API permissions.
   5. Click Add a permission.
   6. Click on the Microsoft Graph, and then select Delegated permissions.
   7. Add the following permissions: "AppCatalog.ReadWrite.All", "Group.ReadWrite.All", "User.Read.All", "TeamSettings.ReadWrite.All", "Channel.Delete.All", "ChannelSettings.ReadWrite.All", "ChannelMember.ReadWrite.All".
   8. Next, we need to add "Skype and Teams Tenant Admin API" resource permission. Click Add a permission.
   9. Navigate to "APIs my organization uses"
   10. Search for "Skype and Teams Tenant Admin API", and then select Delegated permissions.
   11. Add all the listed permissions.
   12. Grant admin consent to both Microsoft Graph and "Skype and Teams Tenant Admin API" name.

```yaml
Type: String[]
Parameter Sets: AccessTokens
Aliases:
Required: True
Position: Named
Default value: None
Accept wildcard characters: False
```

### -AadAccessToken (Removed from version 2.3.2-preview)
Specifies an Azure Active Directory Graph access token.
> [!WARNING]
>This parameter has been removed from version 2.3.2-preview.

```yaml
Type: String
Parameter Sets: AccessToken
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AccountId
Specifies the ID of an account.

```yaml
Type: String
Parameter Sets: UserCredential
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationId
Specifies the application ID of the service principal that is used in application-based authentication.

This parameter has been reintroduced with version 4.7.1-preview. For more information about Application-based authentication and supported cmdlets, see [Application-based authentication in Teams PowerShell Module](https://learn.microsoft.com/microsoftteams/teams-powershell-application-authentication).

```yaml
Type: String
Parameter Sets: ServicePrincipalCertificate
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Certificate
Specifies the certificate that is used for application-based authentication. A valid value is the X509Certificate2 object value of the certificate.

This parameter has been introduced with version 4.9.2-preview. For more information about application-based authentication and supported cmdlets, see [Application-based authentication in Teams PowerShell Module](https://learn.microsoft.com/microsoftteams/teams-powershell-application-authentication).

```yaml
Type: X509Certificate2
Parameter Sets: ServicePrincipalCertificate
Aliases: CertificateThumbprint

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CertificateThumbprint
Specifies the certificate thumbprint of a digital public key X.509 certificate of an application that has permission to perform this action.

This parameter has been reintroduced with version 4.7.1-preview. For more information about Application-based authentication and supported cmdlets, see [Application-based authentication in Teams PowerShell Module](https://learn.microsoft.com/microsoftteams/teams-powershell-application-authentication).

```yaml
Type: String
Parameter Sets: ServicePrincipalCertificate
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential
Specifies a PSCredential object.
For more information about the PSCredential object, type Get-Help Get-Credential.

The PSCredential object provides the user ID and password for organizational ID credentials.

```yaml
Type: PSCredential
Parameter Sets: UserCredential
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogFilePath
The path where the log file for this PowerShell session is written to.
Provide a value here if you need to deviate from the default PowerShell log file location.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogLevel
Specifies the log level.
The acceptable values for this parameter are:

- Info
- Error
- Warning
- None

The default value is Info.

```yaml
Type: LogLevel
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MsAccessToken (Removed from version 2.3.2-preview)
Specifies a Microsoft Graph access token.
> [!WARNING]
>This parameter has been removed from version 2.3.2-preview.

```yaml
Type: String
Parameter Sets: AccessToken
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TenantId
Specifies the ID of a tenant.

If you do not specify this parameter, the account is authenticated with the home tenant.

You must specify the TenantId parameter to authenticate as a service principal or when using Microsoft account.

```yaml
Type: String
Parameter Sets: UserCredential, AccessToken
Aliases: Domain, TenantDomain
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: ServicePrincipalCertificate
Aliases: Domain, TenantDomain
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsEnvironmentName
Specifies the Teams environment. The following environments are supported:

   - Commercial or GCC environments: Don't use this parameter, this is the default.
   - GCC High environment: TeamsGCCH
   - DoD environment: TeamsDOD
   - Microsoft Teams operated by 21Vianet: TeamsChina

```yaml
Type: String
Parameter Sets: UserCredential
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Login using managed service identity in the current environment. For *-Cs cmdlets, this is supported from version 5.8.1-preview onwards.

> [!Note]
> This is currently only supported in commercial environments. A few [cmdlets](https://learn.microsoft.com/microsoftteams/teams-powershell-application-authentication#cmdlets-supported) that don't support application-based authentication are not supported either.

```yaml
Type: SwitchParameter
Parameter Sets: ManagedServiceLogin
Aliases: MSI, ManagedService
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedServiceHostName
Host name for managed service login.

```yaml
Type: String
Parameter Sets: ManagedServiceLogin
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedServicePort
Port number for managed service login.

```yaml
Type: Int32
Parameter Sets: ManagedServiceLogin
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedServiceSecret
Secret, used for some kinds of managed service login.

```yaml
Type: SecureString
Parameter Sets: ManagedServiceLogin
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDeviceAuthentication
Use device code authentication instead of a browser control.

```yaml
Type: SwitchParameter
Parameter Sets: UserCredential
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
