---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: New-SPWebApplication
schema: 2.0.0
---

# New-SPWebApplication

## SYNOPSIS
Creates a new Web application within the local farm.


## SYNTAX

```
New-SPWebApplication -ApplicationPool <String> -Name <String>
 [-AdditionalClaimProvider <SPClaimProviderPipeBind[]>] [-AllowAnonymousAccess]
 [-ApplicationPoolAccount <SPProcessAccountPipeBind>] [-AssignmentCollection <SPAssignmentCollection>]
 [-AuthenticationMethod <String>] [-AuthenticationProvider <SPAuthenticationProviderPipeBind[]>] [-Confirm]
 [-DatabaseCredentials <PSCredential>] [-DatabaseName <String>] [-DatabaseServer <String>]
 [-HostHeader <String>] [-Path <String>] [-Port <UInt32>] [-SecureSocketsLayer]
 [-ServiceApplicationProxyGroup <SPServiceApplicationProxyGroupPipeBind>]
 [-SignInRedirectProvider <SPTrustedIdentityTokenIssuerPipeBind>] [-SignInRedirectURL <String>] [-Url <String>]
 [-UserSettingsProvider <SPUserSettingsProviderPipeBind>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Creates a new Web application specified by the Name parameter.
The user specified by the DatabaseCredentials parameter must be a member of the dbcreator fixed server role on the database server.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE-----------------------
```
C:\PS>New-SPWebApplication -Name "Contoso Internet Site" -Port 80 -HostHeader sharepoint.contoso.com -URL "https://www.contoso.com" -ApplicationPool "ContosoAppPool" -ApplicationPoolAccount (Get-SPManagedAccount "DOMAIN\jdoe")
```

This example creates a new Web application by using an internal host header of sharepoint.contoso.com and a public URL of https://www.contoso.com.


## PARAMETERS

### -ApplicationPool
Specifies the name of an application pool to use; for example, SharePoint - 1213.
If an application pool with the name provided does not exist, the ApplicationPoolAccount parameter must be provided and a new application pool will be created.
If no value is specified, the default application pool will be used.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Specifies the name of the new Web application.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AdditionalClaimProvider
Adds a specific claim provider to the defined Web application.

```yaml
Type: SPClaimProviderPipeBind[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowAnonymousAccess
Allows anonymous access to the Web application.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationPoolAccount
Specifies the user account that this application pool will run as.
Use the `Get-SPIisWebServicApplicationPool` cmdlet to use a system account.

```yaml
Type: SPProcessAccountPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AuthenticationMethod
Uses Kerberos or NTLM to specify the authentication method.
If no value is specified, the default NTLM is applied.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuthenticationProvider
Specifies the authentication provider or providers that apply to a Web application.

```yaml
Type: SPAuthenticationProviderPipeBind[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseCredentials
Specifies the Windows PowerShell Credential object for the database user account.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseName
Specifies the name of the initial content database for the new Web application.

The type must be a valid database name; for example, ContentDB1.
If no value is specified, a value in the format WSS_Content_\<GUID\> is auto-generated.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseServer
Specifies the database server name.
The type must be a valid database server name, in the form SQL1; where named instances are used, the format can appear as server\server.
The default SQL server instance is used if a value is not provided.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HostHeader
Specifies a valid URL assigned to the Web application that must correlate to the alternate access mapping configuration, in the form server_name.

When the HostHeader parameter is present, the value of this field is the internal URL for the Web application.
The Url parameter is used to specify the public URL.If no value is specified, the value is left blank.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Path
Specifies the physical directory for the new Web application in the virtual directories folder.
The type is a valid path, in the form C:\Inutepub\wwwroot\MyWebApplication.
If no value is specified, the value %wwwroot%\wss\VirtualDirectories\\\<portnumber\> is applied.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Port
Specifies the port on which this Web application can be accessed.
This can be any valid port number.
If no port is specified, a nonconflicting port number is automatically generated.

If you specify a port number that has already been assigned, IIS does not start the new site until you change either the port number of the new site or the port number of the old site.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecureSocketsLayer
Enables Secure Sockets Layer (SSL) encryption for this Web application.
If you choose to use SSL, you must add the certificate on each server by using the IIS administration tools.
Until this is done, the Web application will be inaccessible from this IIS Web site.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceApplicationProxyGroup
Specifies a custom service application proxy group for the Web application to use.
The Web application will use the proxies in this proxy group to connect to service applications.
If this parameter is not specified, the default proxy group for the farm is used.

```yaml
Type: SPServiceApplicationProxyGroupPipeBind
Parameter Sets: (All)
Aliases: ProxyGroup
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SignInRedirectProvider
Sets the sign-in redirect URL to point to the URL that is defined in the specified authentication provider.

```yaml
Type: SPTrustedIdentityTokenIssuerPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SignInRedirectURL
Specifies the sign-in redirect URL for the Web application.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Url
Specifies the load-balanced URL for the Web application.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserSettingsProvider
{{ Fill UserSettingsProvider Description}}

```yaml
Type: SPUserSettingsProviderPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
