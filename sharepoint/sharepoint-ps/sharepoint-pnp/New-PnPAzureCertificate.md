---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# New-PnPAzureCertificate

## SYNOPSIS
Generate a new 2048bit self-signed certificate and manifest settings for use when using CSOM via an app-only ADAL application.

See https://github.com/SharePoint/PnP-PowerShell/tree/master/Samples/SharePoint.ConnectUsingAppPermissions for a sample on how to get started.

KeyCredentials contains the ADAL app manifest sections.

Certificate contains the PEM encoded certificate.

PrivateKey contains the PEM encoded private key of the certificate.

## SYNTAX 

```powershell
New-PnPAzureCertificate [-CommonName <String>]
                        [-Country <String>]
                        [-State <String>]
                        [-Locality <String>]
                        [-Organization <String>]
                        [-OrganizationUnit <String>]
                        [-Out <String>]
                        [-ValidYears <Int>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Generate-PnPAzureCertificate
```

This will generate a default self-signed certificate named "pnp.contoso.com" valid for 10 years.

### ------------------EXAMPLE 2------------------
```powershell
Generate-PnPAzureCertificate -CommonName "My Certificate" -ValidYears 30 
```

This will output a certificate named "My Certificate" which expires in 30 years from now.

## PARAMETERS

### -CommonName
Common Name (e.g. server FQDN or YOUR name) [pnp.contoso.com]

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: False
```

### -Country
Country Name (2 letter code)

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: 1
Accept pipeline input: False
```

### -Locality
Locality Name (eg, city)

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: 3
Accept pipeline input: False
```

### -Organization
Organization Name (eg, company)

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: 4
Accept pipeline input: False
```

### -OrganizationUnit
Organizational Unit Name (eg, section)

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: 5
Accept pipeline input: False
```

### -Out
Filename to write to, optionally including full path (.pfx)

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: 6
Accept pipeline input: False
```

### -State
State or Province Name (full name)

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: 2
Accept pipeline input: False
```

### -ValidYears
Number of years until expiration (default is 10, max is 30)

```yaml
Type: Int
Parameter Sets: (All)

Required: False
Position: 6
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)