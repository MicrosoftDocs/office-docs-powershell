---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Get-PnPAzureCertificate

## SYNOPSIS
Get PEM values and manifest settings for an existing certificate (.pfx) for use when using CSOM via an app-only ADAL application.

See https://github.com/SharePoint/PnP-PowerShell/tree/master/Samples/SharePoint.ConnectUsingAppPermissions for a sample on how to get started.

KeyCredentials contains the ADAL app manifest sections.

Certificate contains the PEM encoded certificate.

PrivateKey contains the PEM encoded private key of the certificate.

## SYNTAX 

```powershell
Get-PnPAzureCertificate -CertificatePath <String>
                        [-CertificatePassword <SecureString>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPAzureCertificate -CertificatePath "mycert.pfx"
```

This will output PEM values and ADAL app manifest settings for the certificate mycert.pfx.

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPAzureCertificate -CertificatePath "mycert.pfx" -CertificatePassword (ConvertTo-SecureString -String "YourPassword" -AsPlainText -Force)
```

This will output PEM values and ADAL app manifest settings for the certificate mycert.pfx which has the password YourPassword.

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPAzureCertificate -CertificatePath "mycert.cer" | clip
```

Output the JSON snippet which needs to be replaced in the application manifest file and copies it to the clipboard

## PARAMETERS

### -CertificatePassword
Password to the certificate (*.pfx)

```yaml
Type: SecureString
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -CertificatePath
Path to the certificate (*.pfx)

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)