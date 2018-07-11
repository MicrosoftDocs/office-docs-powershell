---
external help file: 
applicable: SharePoint Online
title: Connect-SPOService
schema: 2.0.0
---

# Connect-SPOService

## SYNOPSIS

Connects a SharePoint Online global administrator to a SharePoint Online connection (the SharePoint Online Administration Center).
This cmdlet must be run before any other SharePoint Online cmdlets can run.


## SYNTAX

### AuthenticationUrl

```
Connect-SPOService -AuthenticationUrl <String> [-ClientTag <String>] [-Credential <CredentialCmdletPipeBind>]
 -Url <UrlCmdletPipeBind> [<CommonParameters>]
```

### AuthenticationLocation

```
Connect-SPOService [-ClientTag <String>] [-Credential <CredentialCmdletPipeBind>]
 [-Region <AADCrossTenantAuthenticationLocation>] -Url <UrlCmdletPipeBind> [<CommonParameters>]
```

## DESCRIPTION

The `Connect-SPOService` cmdlet connects a SharePoint Online global administrator to the SharePoint Online Administration Center.

Only a single SharePoint Online service connection is maintained from any single Windows PowerShell session.
In other words, this is a per-organization administrator connection.
Running the `Connect-SPOService` cmdlet twice implicitly disconnects the previous connection.
The Windows PowerShell session will be set to serve the new SharePoint Online global administrator specified.

A delegated partner administrator has to swap connections for different organizations within the same Windows PowerShell session.

You must be a SharePoint Online global administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).


## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------

```
Connect-SPOService -Url https://contoso-admin.sharepoint.com -credential admin@contoso.com
```

Example 1 shows how a SharePoint Online global administrator with credential admin@contoso.com connects to a SharePoint Online Administration Center that has the URL http://contoso-admin.sharepoint.com/.


### -----------------------EXAMPLE 2-----------------------------

```
$username = "admin@contoso.sharepoint.com"
$password = "password"
$cred = New-Object -TypeName System.Management.Automation.PSCredential -argumentlist $userName, $(convertto-securestring $Password -asplaintext -force)
Connect-SPOService -Url https://contoso-admin.sharepoint.com/ -Credential $cred
```

Example 2 shows how a SharePoint Online global administrator with a username and password connects to a SharePoint Online Administration Center that has the URL http://contoso-admin.sharepoint.com/.


## PARAMETERS

### -AuthenticationUrl

Location for AAD Cross-Tenant Authentication service. Can be optionally used if non-default Cross-Tenant Authentication Service is used.

```yaml
Type: String
Parameter Sets: AuthenticationUrl
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientTag

Permits appending a client tag to existing client tag. Used optionally in the CSOM http traffic to identify used script or solution.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential

Specifies the credentials to use to connect. If no credentials are presented, a dialog will prompt for the credentials. The credentials must be those of a SharePoint Online global administrator who can access the SharePoint Online Administration Center site.


```yaml
Type: CredentialCmdletPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Region

The valid values are: Default | ITAR | Germany | China

The default value is "default".

> [!NOTE] 
> The ITAR value is for United States Government cloud tenancies only.  


```yaml
Type: AADCrossTenantAuthenticationLocation
Parameter Sets: AuthenticationLocation
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Url
Specifies the URL of the SharePoint Online Administration Center site.


```yaml
Type: UrlCmdletPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS


