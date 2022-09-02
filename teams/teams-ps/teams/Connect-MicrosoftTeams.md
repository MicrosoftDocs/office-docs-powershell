---
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/connect-microsoftteams
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

> [!WARNING]
>If basic authentication is not enabled, legacy *-Cs cmdlets will not function properly. For Remote PowerShell, basic authentication is necessary.
>
>Update: With versions 4.x.x or later, basic authentication enablement is not needed anymore in Commercial Environments. Except for tenants that are or have previously been enabled for Regionally Hosted Meetings for Skype for Business Online.

## EXAMPLES

### Example 1: Connect to MicrosoftTeams
This example connects to an Azure account. You must provide a Microsoft account or organizational ID credentials. If multi-factor authentication is enabled for your credentials, you must log in using the interactive option.

```powershell
Connect-MicrosoftTeams
Account                 Environment 	Tenant                                TenantId                         
-------                 -----------  ------------------------------------  ------------------------------------
user@contoso.com        AzureCloud   xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx  xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

### Example 2: Connect to MicrosoftTeams
The first command prompts for user credentials and stores them in the $Credential variable. The second command connects to an Azure account using the credentials stored in $credential. This account authenticates with Azure using organizational ID credentials.

```powershell
$credential = Get-Credential
Connect-MicrosoftTeams -Credential $credential
Account                 Environment 	Tenant                                TenantId                         
-------                 -----------  ------------------------------------  ------------------------------------
user@contoso.com        AzureCloud   xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx  xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

### Example 3: Connect to MicrosoftTeams in a specific environment
This example connects to an Azure account in a specific environment. You must provide a Microsoft account or organizational ID credentials. If multi-factor authentication is enabled for your credentials, you must log in using the interactive option.

```powershell
Connect-MicrosoftTeams -TeamsEnvironmentName TeamsGCCH
Account                 Environment 	Tenant                                TenantId                         
-------                 -----------  ------------------------------------  ------------------------------------
user@contoso.com        TeamsGCCH   xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx  xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

### Example 4: Connect to MicrosoftTeams using Access Tokens
This example demonstrates how to sign in using Access Tokens. Admin can retrieve Access Tokens via the login.microsoftonline.com endpoint. It requires two tokens, MS Graph Access Token and Teams Resource token. 

A delegated flow, such as Resource Owner Password Credentials (ROPC) or device code, must be used, with the following delegated app permissions required.

| API | Grant type | Permission |
|-|-|-|
| Microsoft Graph | Delegated | User.Read.All |
| Microsoft Graph | Delegated | Group.ReadWrite.All |
| Microsoft Graph | Delegated | AppCatalog.ReadWrite.All |
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

Account                 Environment 	Tenant                                TenantId                         
-------                 -----------  ------------------------------------  ------------------------------------
user@contoso.com        AzureCloud   xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx  xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

## PARAMETERS

### AccessTokens
Specifies a access tokens for "MSGraph" and "Skype and Teams Tenant Admin API" resources. This new parameter is added in version 2.3.2-preview. 

Following steps must be performed by Tenant Admin in the Azure portal when using your own application. 

Steps to configure the AAD application. 
1. Go to Azure portal and go to App Registrations. 
2. Create or select the existing application.
3. Add the following permission to this Application. 
4. Click API permissions. 
5. Click Add a permission. 
6. Click on the Microsoft MS Graph, and then select Delegated Permission.
7. Add the following permissions: "AppCatalog.ReadWrite.All", "Group.ReadWrite.All", "User.Read.All";
8. Next, we need to add "Skype and Teams Tenant Admin API" resource permission. Click Add a permission.
9. Navigate to "APIs my organization uses" 
10. Search for "Skype and Teams Tenant Admin API".
11. Add all the listed permissions. 
12. Grant admin consent to both MS Graph and "Skype and Teams Tenant Admin API" name.

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
Specifies a Azure Active Directory Graph access token.
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
Specifies the application ID of the service principal.

> [!WARNING]
>This parameter has been removed from the latest versions and replaced by the AccessTokens parameter.

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

### -CertificateThumbprint (Removed from version 2.4.1-preview)
Specifies the certificate thumbprint of a digital public key X.509 certificate of a user account that has permission to perform this action.
> [!WARNING]
>This parameter has been removed from version 2.4.1-preview.

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
Use this setting if your organization is in one of the Teams Government Cloud environments.

Specify "TeamsGCCH" if your organization is in the GCC High Environment.  Specify "TeamsDOD" if your organization is in the DoD Environment. 

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
Login using managed service identity in the current environment. This is currently not supported for *-Cs cmdlets. 

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


### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
