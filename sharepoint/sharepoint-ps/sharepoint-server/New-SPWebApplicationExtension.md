---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: New-SPWebApplicationExtension
schema: 2.0.0
---

# New-SPWebApplicationExtension

## SYNOPSIS
Creates a new zone instance for the Web application.


## SYNTAX

```
New-SPWebApplicationExtension [-Identity] <SPWebApplicationPipeBind> -Name <String> -Zone <SPUrlZone>
 [-AdditionalClaimProvider <SPClaimProviderPipeBind[]>] [-AllowAnonymousAccess]
 [-AssignmentCollection <SPAssignmentCollection>] [-AuthenticationMethod <String>]
 [-AuthenticationProvider <SPAuthenticationProviderPipeBind[]>] [-Confirm] [-HostHeader <String>]
 [-Path <String>] [-Port <UInt32>] [-SecureSocketsLayer]
 [-SignInRedirectProvider <SPTrustedIdentityTokenIssuerPipeBind>] [-SignInRedirectURL <String>] [-Url <String>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The `New-SPWebApplicationExtension` cmdlet creates a new zone instance for the Web application.
This is also known as extending a Web application and allows alternate permissions to be configured for the same content that is available in the existing Web application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE-----------------------
```
C:\PS>Get-SPWebApplication http://sitename | New-SPWebApplicationExtension -Name "ExtranetSite" -SecureSocketsLayer -Zone "Extranet" -URL "https://extranet.sitename.com"
```

This example extends the given Web application at http://sitename to the Extranet zone for SSL use.


## PARAMETERS

### -Identity
Specifies the Web application to extend.

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Name
Specifies the name of the new IIS Web site in the Web application.

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

### -Zone
Specifies one of the five zones with which the internal URL of this new extension is to be associated.
This zone cannot already be in use.

The type must be any one of the following values: Default, Intranet, Internet, Extranet, or Custom

```yaml
Type: SPUrlZone
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
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
Allows anonymous access to the Web application zone.

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
Specifies the authentication provider(s) that applies to a Web apllication.

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

### -HostHeader
Specifies a valid URL assigned to the Web application by that must correlate to the alternate access mapping configuration, in the form http://server_name.

When the HostHeader parameter is present, the value of this field is the internal URL for the Web application.
The Url parameter is used to specify the public URL.

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
Specifies the physical directory for the new Web site (in the virtual directories folder).
The type is a valid path, in the form C:\Inetpub\wwwroot\MyWebApplication.

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
Specifies the application port.
Can be any valid port number.

If no port is specified, a nonconflicting port number is automatically generated.

If you specify a port number that is already assigned, IIS does not start the new site until you change either the port number of the new site or the port number of the old site.

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
If you use SSL, you must add the certificate on each server by using the IIS administration tools. 
Until this is done, the Web application is inaccessible from this IIS Web site.

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
Specifies the load-balanced URL for the Web application zone.

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
