---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# New-SPTrustedIdentityTokenIssuer

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Creates an identity provider in the farm.



## SYNTAX

### BasicParameterSet
```
New-SPTrustedIdentityTokenIssuer -ClaimsMappings <SPClaimMappingPipeBind[]> -Description <String>
 -IdentifierClaim <String> -Name <String> -Realm <String> -SignInUrl <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-ClaimProvider <SPClaimProviderPipeBind>]
 [-ImportTrustCertificate <X509Certificate2>] [-UseWReply] [-Confirm] [-RegisteredIssuerName <String>]
 [-SignOutUrl <String>] [-WhatIf] [<CommonParameters>]
```

### MetadataEndPointParameterSet
```
New-SPTrustedIdentityTokenIssuer -ClaimsMappings <SPClaimMappingPipeBind[]> -Description <String>
 -IdentifierClaim <String> -Name <String> -Realm <String> -SignInUrl <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-ClaimProvider <SPClaimProviderPipeBind>]
 -MetadataEndPoint <Uri> [-UseWReply] [-Confirm] [-SignOutUrl <String>] [-WhatIf] [<CommonParameters>]
```

### ActiveDirectoryBackedParameterSet
```
New-SPTrustedIdentityTokenIssuer -Description <String> -Name <String> -Realm <String> -SignInUrl <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-ImportTrustCertificate <X509Certificate2>] [-UseWReply]
 [-Confirm] [-IdentifierClaimIs <String>] [-RegisteredIssuerName <String>] [-SignOutUrl <String>]
 [-UseDefaultConfiguration] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The New-SPTrustedIdentityTokenIssuer cmdlet creates an identity provider in the farm.
This object is created and used only for setting this type of identity provider in a Web application.
The specified claim type cannot be NTLM, Classic NTLM, Negotiate, or Classic Negotiate.
For ASP.NET Membership provider or Role providers, no objects are persisted.
For security token service (STS) identity providers, this cmdlet creates and persists the identity provider object in the SPFarm object.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ----------------------- EXAMPLE--------------------------- (SharePoint Server 2013)
```
C:\PS>New-SPTrustedIdentityTokenIssuer -Name "LiveIDSTS" - Description "LiveID STS" -Certificate (Get-ChildItem"cert:Certificates (LocalComputer)\Personal\Certificates -Name "LiveID Cert") -SignInUrl http://int.contoso.com/ -IdentifierClaim "http://schemas.contoso.com/2007/05/Claims/Puid"

C:\PS>Set -SPWebApplication http://contoso.com -IdentityProvider (Get-SPTrustedIdentityTokenIssuer "LiveIDSTS")
```

This example creates a new identity provider in the farm named LiveIDSTS.

### ----------------------- EXAMPLE--------------------------- (SharePoint Server 2016)
```
C:\PS>New-SPTrustedIdentityTokenIssuer -Name "LiveIDSTS" - Description "LiveID STS" -Certificate (Get-ChildItem"cert:Certificates (LocalComputer)\Personal\Certificates -Name "LiveID Cert") -SignInUrl http://int.contoso.com/ -IdentifierClaim "http://schemas.contoso.com/2007/05/Claims/Puid"

C:\PS>Set -SPWebApplication http://contoso.com -IdentityProvider (Get-SPTrustedIdentityTokenIssuer "LiveIDSTS")
```

This example creates a new identity provider in the farm named LiveIDSTS.

## PARAMETERS

### -ClaimsMappings
Specifies the mapping of the claims from the original token to the SharePoint token.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; or a valid name of a claim mapping rule (for example, Email); or an instance of a valid SPClaimMapping object.

```yaml
Type: SPClaimMappingPipeBind[]
Parameter Sets: BasicParameterSet, MetadataEndPointParameterSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
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

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IdentifierClaim
Specifies which claim type from the trusted STS will be used for the new identity provider.

The type must be a valid claim type from the trusted STS; for example, http://schemas.microsoft.com/2007/05/Claims/Puid.

```yaml
Type: String
Parameter Sets: BasicParameterSet, MetadataEndPointParameterSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Specifies the name of the new identity provider.

The type must be a valid name of an identity provider; for example, LiveIDSTS.

```yaml
Type: String
Parameter Sets: (All)
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

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SignInUrl
Specifies the sign-in URLs for this trusted STS identity provider.

The type must be a valid URL, in the form http://int.live.com/.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
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

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; or a valid name of identity provider (for example, MyIDprovider1); or an instance of a valid SPIdentityProvider object.

```yaml
Type: SPClaimProviderPipeBind
Parameter Sets: BasicParameterSet, MetadataEndPointParameterSet
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
Parameter Sets: BasicParameterSet, ActiveDirectoryBackedParameterSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
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

### -UseWReply
Includes a WReply with the token request.
WReply is a URL at the relying party to which the requestor is redirected once sign-out processing is complete.

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

### -IdentifierClaimIs
{{Fill IdentifierClaimIs Description}}

```yaml
Type: String
Parameter Sets: ActiveDirectoryBackedParameterSet
Aliases: 
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
Parameter Sets: BasicParameterSet, ActiveDirectoryBackedParameterSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SignOutUrl
{{Fill SignOutUrl Description}}

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

### -UseDefaultConfiguration
{{Fill UseDefaultConfiguration Description}}

```yaml
Type: SwitchParameter
Parameter Sets: ActiveDirectoryBackedParameterSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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

