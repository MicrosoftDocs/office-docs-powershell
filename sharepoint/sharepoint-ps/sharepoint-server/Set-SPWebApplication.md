---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Set-SPWebApplication
schema: 2.0.0
---

# Set-SPWebApplication

## SYNOPSIS
Configures the specified Web application.


## SYNTAX

### UpdateMailSettings
```
Set-SPWebApplication [-Identity] <SPWebApplicationPipeBind> [-OutgoingEmailAddress <String>]
 [-ReplyToEmailAddress <String>] -SMTPServer <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-Force] [-WhatIf] [-DisableSMTPEncryption] [-NotProvisionGlobally] [-SMTPServerPort <Int32>]
 [<CommonParameters>]
```

### UpdateClaimSettings
```
Set-SPWebApplication [-Identity] <SPWebApplicationPipeBind> -Zone <SPUrlZone>
 [-AdditionalClaimProvider <SPClaimProviderPipeBind[]>] [-AssignmentCollection <SPAssignmentCollection>]
 [-AuthenticationMethod <String>] [-AuthenticationProvider <SPAuthenticationProviderPipeBind[]>] [-Confirm]
 [-Force] [-SignInRedirectProvider <SPTrustedIdentityTokenIssuerPipeBind>] [-SignInRedirectURL <String>]
 [-WhatIf] [-NotProvisionGlobally] [<CommonParameters>]
```

### UpdateGeneralSettings
```
Set-SPWebApplication [-Identity] <SPWebApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-DefaultQuotaTemplate <String>] [-DefaultTimeZone <Int32>] [-Force]
 [-ServiceApplicationProxyGroup <SPServiceApplicationProxyGroupPipeBind>] [-WhatIf] [-NotProvisionGlobally]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The `Set-SPWebApplication` cmdlet configures the Web application specified by the Identity parameter.
For any settings that are zone-specific (for the Zone parameter set), the zone to configure must be provided.
The provided zone must already exist.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE-----------------------
```
C:\PS>Get-SPWebApplication http://somesite | Set-SPWebApplication -Zone "Extranet" -HostHeader "http://www.contoso.com" - AllowAnonymousAccess
```

This example sets the HostHeader URL for the Extranet zone of the given Web application as http://www.contoso.com and enables anonymous access.


## PARAMETERS

### -Identity
Specifies the name or URL of the Web application.

The type must be a valid name, in the form WebApplication-1212, or URL, in the form http://server_name/WebApplicaiton-1212.

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

### -OutgoingEmailAddress
Specifies the new outgoing e-mail address for e-mail messages sent from this Web application.
The type must be a valid address; for example, someone@example.com.

```yaml
Type: String
Parameter Sets: UpdateMailSettings
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplyToEmailAddress
Configures the reply e-mail address.

The type must be a valid address; for example, someone@example.com.

```yaml
Type: String
Parameter Sets: UpdateMailSettings
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SMTPServer
Specifies the new outbound SMTP server that this Web application will use.

```yaml
Type: String
Parameter Sets: UpdateMailSettings
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Zone
When configuring zone-specific settings, the zone to configure must be specified.
This zone must already exist.

The type must be any one of the following values: Default, Intranet, Internet, Extranet, or Custom.

```yaml
Type: SPUrlZone
Parameter Sets: UpdateClaimSettings
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
Parameter Sets: UpdateClaimSettings
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
Use to set a Web application to classic Windows authentication.
The valid values are NTLM or Kerberos.

```yaml
Type: String
Parameter Sets: UpdateClaimSettings
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuthenticationProvider
Defines the authentication provider(s) that applies to the Web application.

```yaml
Type: SPAuthenticationProviderPipeBind[]
Parameter Sets: UpdateClaimSettings
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

### -DefaultQuotaTemplate
Specifies the new default site quota template for this Web application.

```yaml
Type: String
Parameter Sets: UpdateGeneralSettings
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultTimeZone
Specifies the default time zone for new site collections in this Web application.

```yaml
Type: Int32
Parameter Sets: UpdateGeneralSettings
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses confirmation messages involved in settings for a Web application.

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
If this parameter is not specified, the farm's default proxy group is used.

```yaml
Type: SPServiceApplicationProxyGroupPipeBind
Parameter Sets: UpdateGeneralSettings
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
Parameter Sets: UpdateClaimSettings
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
Parameter Sets: UpdateClaimSettings
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

### -DisableSMTPEncryption
{{Fill DisableSMTPEncryption Description}}

```yaml
Type: SwitchParameter
Parameter Sets: UpdateMailSettings
Aliases: 
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotProvisionGlobally
{{Fill NotProvisionGlobally Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SMTPServerPort
{{Fill SMTPServerPort Description}}

```yaml
Type: Int32
Parameter Sets: UpdateMailSettings
Aliases: 
Applicable: SharePoint Server 2016

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
