---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Set-SPTrustedIdentityTokenIssuer

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Sets the identity providers of a Web application.



## SYNTAX

### ImportCertificateParameterSet
```
Set-SPTrustedIdentityTokenIssuer [-Identity] <SPTrustedIdentityTokenIssuerPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-ClaimProvider <SPClaimProviderPipeBind>]
 [-ClaimsMappings <SPClaimMappingPipeBind[]>] [-Description <String>]
 -ImportTrustCertificate <X509Certificate2> [-Realm <String>] [-SignInUrl <String>] [-UseWReply] [-Confirm]
 [-RegisteredIssuerName <String>] [-WhatIf] [<CommonParameters>]
```

### MetadataEndPointParameterSet
```
Set-SPTrustedIdentityTokenIssuer [-Identity] <SPTrustedIdentityTokenIssuerPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-ClaimProvider <SPClaimProviderPipeBind>]
 [-ClaimsMappings <SPClaimMappingPipeBind[]>] [-Description <String>] -MetadataEndPoint <Uri> [-Realm <String>]
 [-SignInUrl <String>] [-UseWReply] [-Confirm] [-RegisteredIssuerName <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Set-SPTrustedIdentityTokenIssuer cmdlet sets the identity providers of a Web application or extended Web application.
For the ASP.NET Membership provider and Role provider, this cmdlet changes the identity provider only if the result is piped to a variable and passed to a Web application.
For security token service (STS) identity providers, this cmdlet changes the persisted identity provider object in the SPFarm object.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### -------------------------EXAMPLE 1---------------------- (SharePoint Server 2013)
```
C:\PS>Set-SPTrustedIdentityTokenIssuer "LiveIDSTS" -ImportTrustCertificate (Get-ChildItem"cert:Certificates (LocalComputer)\Personal\Certificates -Name "LiveID Cert")
```

This example sets the identity provider to LiveIDSTS.

### -------------------------EXAMPLE 1---------------------- (SharePoint Server 2016)
```
C:\PS>Set-SPTrustedIdentityTokenIssuer "LiveIDSTS" -Certificate (Get-ChildItem"cert:Certificates (LocalComputer)\Personal\Certificates -Name "LiveID Cert")
```

This example sets the identity provider to LiveIDSTS.

### -------------------------EXAMPLE 2---------------------- (SharePoint Server 2013)
```
C:\PS>$ip = @( (Get-SPTrustedIdentityTokenIssuer "LiveID STS"), (New-SPTrustedIdentityTokenIssuer -ASPNetMembershipProvider "myMembershipProvider" -ASPNetRoleProvider "myRoleProvider"), (Get-SPTrustedIdentityTokenIssuer "NTLM")) )New-SPWebApplication http://contoso.com -IdentityProvider $ip
```

This example sets the identity provider using the .ASPNetMembership and Role parameters.
When these parameters are used, a variable must be set; otherwise, the values do not take effect.

### -------------------------EXAMPLE 2---------------------- (SharePoint Server 2016)
```
C:\PS>$ip = @( (Get-SPTrustedIdentityTokenIssuer "LiveID STS"), (New-SPTrustedIdentityTokenIssuer -ASPNetMembershipProvider "myMembershipProvider" -ASPNetRoleProvider "myRoleProvider"), (Get-SPTrustedIdentityTokenIssuer "NTLM")) )
New-SPWebApplication http://contoso.com -IdentityProvider $ip
```

This example sets the identity provider using the .ASPNetMembership and Role parameters.
When these parameters are used, a variable must be set; otherwise, the values do not take effect.

## PARAMETERS

### -Identity
Specifies the identity provider to update.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; or a valid name of identity provider (for example, LiveID STS); or an instance of a valid SPIdentityProvider object.

```yaml
Type: SPTrustedIdentityTokenIssuerPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ClaimProvider
Specifies the IP STS that can resolve and search claims for claims people picker.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; or a valid name of a claim provider (for example, MyIDprovider1); or an instance of a valid SPClaimProvider object.

```yaml
Type: SPClaimProviderPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClaimsMappings
Specifies the mapping of the claims from the original token to the SharePoint token.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; or a valid name of a claim mapping rule (for example, Email); or an instance of a valid SPClaimMapping object.

```yaml
Type: SPClaimMappingPipeBind[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Specifies a description for the new identity provider.

The type must be a valid string; for example, LiveID STS.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImportTrustCertificate
Specifies the X.509 certificate object from trusted authentication provider farm.

The type must be a name of a valid X.509 certificate; for example, Certificate1.

```yaml
Type: X509Certificate2
Parameter Sets: ImportCertificateParameterSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MetadataEndPoint
```yaml
Type: Uri
Parameter Sets: MetadataEndPointParameterSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Realm
Specifies the realm, or resource partition, associated with this trust.

The type must be a name of a valid realm; for example, MD_REALM.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SignInUrl
Specifies the sign-in URLs for this trusted identity provider STS.

The type must be a valid URL, in the form http://int.live.com/.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseWReply
Includes a WReply with the token request.
Wreply is a URL at the relying party to which the requestor is redirected once sign-out processing is complete.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RegisteredIssuerName
{{Fill RegisteredIssuerName Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
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
Applicable: SharePoint Server 2013, SharePoint Server 2016

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

