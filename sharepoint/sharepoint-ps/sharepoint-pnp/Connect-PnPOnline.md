---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---

# Connect-PnPOnline

## SYNOPSIS
Connect to a SharePoint site

## SYNTAX 

### Main
```powershell
Connect-PnPOnline -Url <String>
                  [-ReturnConnection [<SwitchParameter>]]
                  [-Credentials <CredentialPipeBind>]
                  [-CurrentCredentials [<SwitchParameter>]]
                  [-UseAdfs [<SwitchParameter>]]
                  [-LoginProviderName <String>]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-AuthenticationMode <ClientAuthenticationMode>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-Scopes <String[]>]
                  [-TenantAdminUrl <String>]
                  [-SkipTenantAdminCheck [<SwitchParameter>]]
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

### Access Token
```powershell
Connect-PnPOnline -AccessToken <String>
                  [-ReturnConnection [<SwitchParameter>]]
                  [-Url <String>]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-SkipTenantAdminCheck [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

### PnP Office 365 Management Shell to the Microsoft Graph
```powershell
Connect-PnPOnline -Graph [<SwitchParameter>]
                  [-LaunchBrowser [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

### Microsoft Graph using Scopes
```powershell
Connect-PnPOnline -Scopes <String[]>
                  [-NoTelemetry [<SwitchParameter>]]
```

### WebLogin 
```powershell
Connect-PnPOnline -Url <String>
                  -UseWebLogin [<SwitchParameter>]
                  [-ReturnConnection [<SwitchParameter>]]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-Scopes <String[]>]
                  [-TenantAdminUrl <String>]
                  [-SkipTenantAdminCheck [<SwitchParameter>]]
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

### SPO Management Shell Credentials
```powershell
Connect-PnPOnline -Url <String>
                  -SPOManagementShell [<SwitchParameter>]
                  [-ReturnConnection [<SwitchParameter>]]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-ClearTokenCache [<SwitchParameter>]]
                  [-Scopes <String[]>]
                  [-TenantAdminUrl <String>]
                  [-SkipTenantAdminCheck [<SwitchParameter>]]
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

### PnP O365 Management Shell / DeviceLogin
```powershell
Connect-PnPOnline -Url <String>
                  -PnPO365ManagementShell [<SwitchParameter>]
                  [-ReturnConnection [<SwitchParameter>]]
                  [-LaunchBrowser [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

### Token
```powershell
Connect-PnPOnline -Url <String>
                  -AppId <String>
                  -AppSecret <String>
                  [-ReturnConnection [<SwitchParameter>]]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-Realm <String>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-Scopes <String[]>]
                  [-TenantAdminUrl <String>]
                  [-SkipTenantAdminCheck [<SwitchParameter>]]
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

### Azure Active Directory
```powershell
Connect-PnPOnline -Url <String>
                  -ClientId <String>
                  -RedirectUri <String>
                  [-ReturnConnection [<SwitchParameter>]]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-ClearTokenCache [<SwitchParameter>]]
                  [-AzureEnvironment <AzureEnvironment>]
                  [-Scopes <String[]>]
                  [-TenantAdminUrl <String>]
                  [-SkipTenantAdminCheck [<SwitchParameter>]]
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

### Microsoft Graph using Azure Active Directory
```powershell
Connect-PnPOnline -AppId <String>
                  -AppSecret <String>
                  -AADDomain <String>
                  [-NoTelemetry [<SwitchParameter>]]
```

### High Trust using a X509Certificate2 object.
```powershell
Connect-PnPOnline -Url <String>
                  -ClientId <String>
                  -HighTrustCertificate <X509Certificate2>
                  [-ReturnConnection [<SwitchParameter>]]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-TenantAdminUrl <String>]
                  [-SkipTenantAdminCheck [<SwitchParameter>]]
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-HighTrustCertificateIssuerId <String>]
                  [-NoTelemetry [<SwitchParameter>]]
```

### App-Only with Azure Active Directory
```powershell
Connect-PnPOnline -Url <String>
                  -ClientId <String>
                  -Tenant <String>
                  -CertificatePath <String>
                  [-ReturnConnection [<SwitchParameter>]]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-CertificatePassword <SecureString>]
                  [-AzureEnvironment <AzureEnvironment>]
                  [-Scopes <String[]>]
                  [-TenantAdminUrl <String>]
                  [-SkipTenantAdminCheck [<SwitchParameter>]]
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

### High Trust using a certificate from a PFX file.
```powershell
Connect-PnPOnline -Url <String>
                  -ClientId <String>
                  -HighTrustCertificatePath <String>
                  -HighTrustCertificatePassword <String>
                  [-ReturnConnection [<SwitchParameter>]]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-TenantAdminUrl <String>]
                  [-SkipTenantAdminCheck [<SwitchParameter>]]
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-HighTrustCertificateIssuerId <String>]
                  [-NoTelemetry [<SwitchParameter>]]
```

### App-Only with Azure Active Directory using certificate as PEM strings
```powershell
Connect-PnPOnline -Url <String>
                  -ClientId <String>
                  -Tenant <String>
                  -PEMCertificate <String>
                  -PEMPrivateKey <String>
                  [-ReturnConnection [<SwitchParameter>]]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-CertificatePassword <SecureString>]
                  [-AzureEnvironment <AzureEnvironment>]
                  [-TenantAdminUrl <String>]
                  [-SkipTenantAdminCheck [<SwitchParameter>]]
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

## DESCRIPTION
If no credentials have been specified, and the CurrentCredentials parameter has not been specified, you will be prompted for credentials.

*For SharePoint Online*: If legacy authentication protocols have been disabled (i.e. When ```powershell(Get-PnPTenant).LegacyAuthProtocolsEnabled``` returns False), the connection attempt will fail with a message such as the following when using a generic credential object (such as that created by ```powershellGet-Credential```) or when using the default options, which prompts for a username and password within the shell:

>Failed to connect to (site), Exception calling "ExecuteQuery" with "0" argument(s): "Cannot contact web site (site) or the web site does not support SharePoint Online credentials. The response status code is 'Unauthorized'. The response headers are 'X-SharePointHealthScore=0, X-MSDAVEXT_Error=917656; Access+denied.+Before+opening+files+in+this+location%2c+you+must+first+browse+to+the+web+site+and+select+the+option+to+login+automatically.

Instead, ensure that you specify the appropriate options that support modern authentication, such as connections with the "-UseWebLogin" or "-PnPO365ManagementShell" parameters or certificate based authentication.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Connect-PnPOnline -Url https://contoso.sharepoint.com
```

This will prompt for username and password and creates a context for the other PowerShell commands to use. When a generic credential is added to the Windows Credential Manager with https://contoso.sharepoint.com, PowerShell will not prompt for username and password.

### ------------------EXAMPLE 2------------------
```powershell
Connect-PnPOnline -Url https://contoso.sharepoint.com -Credentials (Get-Credential)
```

This will prompt for username and password and creates a context for the other PowerShell commands to use. 

### ------------------EXAMPLE 3------------------
```powershell
Connect-PnPOnline -Url http://yourlocalserver -CurrentCredentials
```

This will use the current user credentials and connects to the server specified by the Url parameter.

### ------------------EXAMPLE 4------------------
```powershell
Connect-PnPOnline -Url http://yourlocalserver -Credentials 'O365Creds'
```

This will use credentials from the Windows Credential Manager, as defined by the label 'O365Creds'.

### ------------------EXAMPLE 5------------------
```powershell
Connect-PnPOnline -Url http://yourlocalserver -Credentials (Get-Credential) -UseAdfs
```

This will prompt for username and password and creates a context using ADFS to authenticate.

### ------------------EXAMPLE 6------------------
```powershell
Connect-PnPOnline -Url https://yourserver -Credentials (Get-Credential) -CreateDrive
cd SPO:\\
dir
```

This will prompt you for credentials and creates a context for the other PowerShell commands to use. It will also create a SPO:\\ drive you can use to navigate around the site

### ------------------EXAMPLE 7------------------
```powershell
Connect-PnPOnline -Url https://yourserver -Credentials (Get-Credential) -AuthenticationMode FormsAuthentication
```

This will prompt you for credentials and creates a context for the other PowerShell commands to use. It assumes your server is configured for Forms Based Authentication (FBA)

### ------------------EXAMPLE 8------------------
```powershell
Connect-PnPOnline -Url https://contoso.sharepoint.de -AppId 344b8aab-389c-4e4a-8fa1-4c1ae2c0a60d -AppSecret a3f3faf33f3awf3a3sfs3f3ss3f4f4a3fawfas3ffsrrffssfd -AzureEnvironment Germany
```

This will authenticate you to the German Azure environment using the German Azure endpoints for authentication

### ------------------EXAMPLE 9------------------
```powershell
Connect-PnPOnline -Url https://contoso.sharepoint.com -SPOManagementShell
```

This will authenticate you using the SharePoint Online Management Shell application

### ------------------EXAMPLE 10------------------
```powershell
Connect-PnPOnline -Url https://contoso.sharepoint.com -PnPO365ManagementShell
```

This will authenticate you using the PnP O365 Management Shell Multi-Tenant application. A browser window will have to be opened where you have to enter a code that is shown in your PowerShell window.

### ------------------EXAMPLE 11------------------
```powershell
Connect-PnPOnline -Url https://contoso.sharepoint.com -PnPO365ManagementShell -LaunchBrowser
```

This will authenticate you using the PnP O365 Management Shell Multi-Tenant application. A browser window will automatically open and the code you need to enter will be automatically copied to your clipboard.

### ------------------EXAMPLE 12------------------
```powershell
Connect-PnPOnline -Url https://contoso.sharepoint.com -AccessToken $myaccesstoken
```

This will authenticate you using the provided access token

### ------------------EXAMPLE 13------------------
```powershell
Connect-PnPOnline -Scopes $arrayOfScopes
```

Connects to Azure AD and gets and OAuth 2.0 Access Token to consume the Microsoft Graph API including the declared permission scopes. The available permission scopes are defined at the following URL: https://graph.microsoft.io/en-us/docs/authorization/permission_scopes

### ------------------EXAMPLE 14------------------
```powershell
Connect-PnPOnline -AppId '<id>' -AppSecret '<secret>' -AADDomain 'contoso.onmicrosoft.com'
```

Connects to the Microsoft Graph API using application permissions via an app's declared permission scopes. See https://github.com/SharePoint/PnP-PowerShell/tree/master/Samples/Graph.ConnectUsingAppPermissions for a sample on how to get started.

### ------------------EXAMPLE 15------------------
```powershell
certutil.exe -csp 'Microsoft Enhanced RSA and AES Cryptographic Provider' -v -p 'password' -importpfx -user c:\HighTrust.pfx NoRoot
Connect-PnPOnline -Url https://yourserver -ClientId <id> -HighTrustCertificate (Get-Item Cert:\CurrentUser\My\<thumbprint>)
```

Connect to an on-premises SharePoint environment using a high trust certificate, stored in the Personal certificate store of the current user.

### ------------------EXAMPLE 16------------------
```powershell
Connect-PnPOnline -Url https://contoso.sharepoint.com -ClientId '<id>' -Tenant 'contoso.onmicrosoft.com' -PEMCertificate <PEM string> -PEMPrivateKey <PEM string>
```

Connects to SharePoint using app-only tokens via an app's declared permission scopes. See https://github.com/SharePoint/PnP-PowerShell/tree/master/Samples/SharePoint.ConnectUsingAppPermissions for a sample on how to get started.

### ------------------EXAMPLE 17------------------
```powershell
Connect-PnPOnline -Url https://yourserver -ClientId 763d5e60-b57e-426e-8e87-b7258f7f8188 -HighTrustCertificatePath c:\HighTrust.pfx -HighTrustCertificatePassword 'password' -HighTrustCertificateIssuerId 6b9534d8-c2c1-49d6-9f4b-cd415620bca8
```

Connect to an on-premises SharePoint environment using a high trust certificate stored in a .PFX file.

## PARAMETERS

### -AADDomain
The AAD where the O365 app is registred. Eg.: contoso.com, or contoso.onmicrosoft.com.

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: Microsoft Graph using Azure Active Directory

Required: True
Position: Named
Accept pipeline input: False
```

### -AccessToken
Connect with an existing Access Token

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: Access Token

Required: True
Position: Named
Accept pipeline input: False
```

### -AppId
The Application Client ID to use.

```yaml
Type: String
Parameter Sets: Token, Microsoft Graph using Azure Active Directory

Required: True
Position: Named
Accept pipeline input: False
```

### -AppSecret
The Application Client Secret to use.

```yaml
Type: String
Parameter Sets: Token, Microsoft Graph using Azure Active Directory

Required: True
Position: Named
Accept pipeline input: False
```

### -AuthenticationMode
Specify to use for instance use forms based authentication (FBA)

```yaml
Type: ClientAuthenticationMode
Parameter Sets: Main

Required: False
Position: Named
Accept pipeline input: False
```

### -AzureEnvironment
The Azure environment to use for authentication, the defaults to 'Production' which is the main Azure environment.

Only applicable to: SharePoint Online

```yaml
Type: AzureEnvironment
Parameter Sets: Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings

Required: False
Position: Named
Accept pipeline input: False
```

### -CertificatePassword
Password to the certificate (*.pfx)

Only applicable to: SharePoint Online

```yaml
Type: SecureString
Parameter Sets: App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings

Required: False
Position: Named
Accept pipeline input: False
```

### -CertificatePath
Path to the certificate (*.pfx)

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: App-Only with Azure Active Directory

Required: True
Position: Named
Accept pipeline input: False
```

### -ClearTokenCache
Clears the token cache.

Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: Azure Active Directory, SPO Management Shell Credentials

Required: False
Position: Named
Accept pipeline input: False
```

### -ClientId
The Client ID of the Azure AD Application

```yaml
Type: String
Parameter Sets: Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings

Required: True
Position: Named
Accept pipeline input: False
```

### -CreateDrive
If you want to create a PSDrive connected to the URL

```yaml
Type: SwitchParameter
Parameter Sets: Main, Token, WebLogin, Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings, SPO Management Shell Credentials, Access Token

Required: False
Position: Named
Accept pipeline input: False
```

### -Credentials
Credentials of the user to connect with. Either specify a PSCredential object or a string. In case of a string value a lookup will be done to the Windows Credential Manager for the correct credentials.

```yaml
Type: CredentialPipeBind
Parameter Sets: Main

Required: False
Position: Named
Accept pipeline input: False
```

### -CurrentCredentials
If you want to connect with the current user credentials

```yaml
Type: SwitchParameter
Parameter Sets: Main

Required: False
Position: Named
Accept pipeline input: False
```

### -DriveName
Name of the PSDrive to create (default: SPO)

```yaml
Type: String
Parameter Sets: Main, Token, WebLogin, Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings, SPO Management Shell Credentials, Access Token

Required: False
Position: Named
Accept pipeline input: False
```

### -Graph
Log in using the PnP O365 Management Shell application towards the Graph. You will be asked to consent to: 

* Read and write managed metadata
* Have full control of all site collections
* Read user profiles
* Invite guest users to the organization
* Read and write all groups
* Read and write directory data
* Access the directory as you
* Read and write identity providers
* Access the directory as you


Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: PnP Office 365 Management Shell to the Microsoft Graph

Required: True
Position: Named
Accept pipeline input: False
```

### -HighTrustCertificate
The certificate which has been registered in SharePoint as a Trusted Security Token issuer to use for the High Trust connection. Note that CNG key storage providers are not supported.

Only applicable to: SharePoint Server 2013, SharePoint Server 2016

```yaml
Type: X509Certificate2
Parameter Sets: High Trust using a X509Certificate2 object.

Required: True
Position: Named
Accept pipeline input: False
```

### -HighTrustCertificateIssuerId
The IssuerID under which the certificate has been registered in SharePoint as a Trusted Security Token issuer to use for the High Trust connection. Uses the ClientID if not specified.

Only applicable to: SharePoint Server 2013, SharePoint Server 2016

```yaml
Type: String
Parameter Sets: High Trust using a X509Certificate2 object., High Trust using a certificate from a PFX file.

Required: False
Position: Named
Accept pipeline input: False
```

### -HighTrustCertificatePassword
The password of the private key certificate (.pfx) to use for the High Trust connection

Only applicable to: SharePoint Server 2013, SharePoint Server 2016

```yaml
Type: String
Parameter Sets: High Trust using a certificate from a PFX file.

Required: True
Position: Named
Accept pipeline input: False
```

### -HighTrustCertificatePath
The path to the private key certificate (.pfx) to use for the High Trust connection

Only applicable to: SharePoint Server 2013, SharePoint Server 2016

```yaml
Type: String
Parameter Sets: High Trust using a certificate from a PFX file.

Required: True
Position: Named
Accept pipeline input: False
```

### -IgnoreSslErrors
Ignores any SSL errors. To be used i.e. when connecting to a SharePoint farm using self signed certificates or using a certificate authority not trusted by this machine.

```yaml
Type: SwitchParameter
Parameter Sets: Main, Token, WebLogin, Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings, SPO Management Shell Credentials

Required: False
Position: Named
Accept pipeline input: False
```

### -LaunchBrowser
Launch a browser automatically and copy the code to enter to the clipboard

Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: PnP O365 Management Shell / DeviceLogin, PnP Office 365 Management Shell to the Microsoft Graph

Required: False
Position: Named
Accept pipeline input: False
```

### -LoginProviderName
The name of the ADFS trusted login provider

```yaml
Type: String
Parameter Sets: Main

Required: False
Position: Named
Accept pipeline input: False
```

### -MinimalHealthScore
Specifies a minimal server healthscore before any requests are executed.

```yaml
Type: Int
Parameter Sets: Main, Token, WebLogin, Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings, SPO Management Shell Credentials, Access Token

Required: False
Position: Named
Accept pipeline input: False
```

### -NoTelemetry
In order to help to make PnP PowerShell better, we can track anonymous telemetry. We track the version of the cmdlets you are using, which cmdlet you are executing and which version of SharePoint you are connecting to. Use Disable-PnPPowerShellTelemetry to turn this off in general or use the -NoTelemetry switch to turn it off for that session.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -PEMCertificate
PEM encoded certificate

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: App-Only with Azure Active Directory using certificate as PEM strings

Required: True
Position: Named
Accept pipeline input: False
```

### -PEMPrivateKey
PEM encoded private key for the certificate

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: App-Only with Azure Active Directory using certificate as PEM strings

Required: True
Position: Named
Accept pipeline input: False
```

### -PnPO365ManagementShell
Log in using the PnP O365 Management Shell application. You will be asked to consent to: 
            
* Read and write managed metadata
* Have full control of all site collections
* Read user profiles
* Invite guest users to the organization
* Read and write all groups
* Read and write directory data
* Access the directory as you
* Read and write identity providers
* Access the directory as you

Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: PnP O365 Management Shell / DeviceLogin

Required: True
Position: Named
Accept pipeline input: False
```

### -Realm
Authentication realm. If not specified will be resolved from the url specified.

```yaml
Type: String
Parameter Sets: Token

Required: False
Position: Named
Accept pipeline input: False
```

### -RedirectUri
The Redirect URI of the Azure AD Application

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: Azure Active Directory

Required: True
Position: Named
Accept pipeline input: False
```

### -RequestTimeout
The request timeout. Default is 180000

```yaml
Type: Int
Parameter Sets: Main, Token, WebLogin, Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings, SPO Management Shell Credentials, Access Token

Required: False
Position: Named
Accept pipeline input: False
```

### -RetryCount
Defines how often a retry should be executed if the server healthscore is not sufficient. Default is 10 times.

```yaml
Type: Int
Parameter Sets: Main, Token, WebLogin, Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings, SPO Management Shell Credentials, Access Token

Required: False
Position: Named
Accept pipeline input: False
```

### -RetryWait
Defines how many seconds to wait before each retry. Default is 1 second.

```yaml
Type: Int
Parameter Sets: Main, Token, WebLogin, Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings, SPO Management Shell Credentials, Access Token

Required: False
Position: Named
Accept pipeline input: False
```

### -ReturnConnection
Returns the connection for use with the -Connection parameter on cmdlets.

```yaml
Type: SwitchParameter
Parameter Sets: Main, Token, WebLogin, Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings, SPO Management Shell Credentials, Access Token, PnP O365 Management Shell / DeviceLogin

Required: False
Position: Named
Accept pipeline input: True
```

### -Scopes
The array of permission scopes for the Microsoft Graph API.

Only applicable to: SharePoint Online

```yaml
Type: String[]
Parameter Sets: Main, Token, WebLogin, Azure Active Directory, App-Only with Azure Active Directory, SPO Management Shell Credentials, Microsoft Graph using Scopes

Required: False
Position: Named
Accept pipeline input: False
```

### -SkipTenantAdminCheck
Should we skip the check if this site is the Tenant admin site. Default is false

```yaml
Type: SwitchParameter
Parameter Sets: Main, Token, WebLogin, Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings, SPO Management Shell Credentials, Access Token

Required: False
Position: Named
Accept pipeline input: False
```

### -SPOManagementShell
Log in using the SharePoint Online Management Shell application

Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: SPO Management Shell Credentials

Required: True
Position: Named
Accept pipeline input: False
```

### -Tenant
The Azure AD Tenant name,e.g. mycompany.onmicrosoft.com

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: App-Only with Azure Active Directory using certificate as PEM strings, App-Only with Azure Active Directory

Required: True
Position: Named
Accept pipeline input: False
```

### -TenantAdminUrl
The url to the Tenant Admin site. If not specified, the cmdlets will assume to connect automatically to https://&lt;tenantname&gt;-admin.sharepoint.com where appropriate.

```yaml
Type: String
Parameter Sets: Main, Token, WebLogin, Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings, SPO Management Shell Credentials

Required: False
Position: Named
Accept pipeline input: False
```

### -Url
The Url of the site collection to connect to.

```yaml
Type: String
Parameter Sets: Main, Token, WebLogin, Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings, SPO Management Shell Credentials, Access Token, PnP O365 Management Shell / DeviceLogin

Required: True
Position: 0
Accept pipeline input: True
```

### -UseAdfs
If you want to connect to your on-premises SharePoint farm using ADFS

```yaml
Type: SwitchParameter
Parameter Sets: Main

Required: False
Position: Named
Accept pipeline input: False
```

### -UseWebLogin
If you want to connect to SharePoint with browser based login. This is required when you have multi-factor authentication (MFA) enabled.

```yaml
Type: SwitchParameter
Parameter Sets: WebLogin

Required: True
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)
